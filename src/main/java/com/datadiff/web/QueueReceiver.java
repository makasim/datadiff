package com.datadiff.web;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.concurrent.CountDownLatch;

@Service
public class QueueReceiver {

    private CountDownLatch latch = new CountDownLatch(1);

    @Autowired
    private AddCommit addCommit;

    @Autowired
    ObjectMapper objectMapper;

    public void receive(byte[] rawMessage) throws Exception {
        this.receive(new String(rawMessage, "UTF-8"));
    }

    public void receive(String rawMessage) throws Exception {
        JsonNode message = objectMapper.readTree(rawMessage);

        if (null == message.get("type").textValue()) {
            throw new Exception("The message type is empty");
        }
        if (null == message.get("id").textValue()) {
            throw new Exception("The message id is empty");
        }

        addCommit.add(
                (String) message.get("type").textValue(),
                (String) message.get("id").textValue(),
                message.get("data"),
                message.get("meta")
        );
    }

    public CountDownLatch getLatch() {
        return latch;
    }
}