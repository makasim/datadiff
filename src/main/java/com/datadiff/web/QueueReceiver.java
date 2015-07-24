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

    public void receive(byte[] messageBytes) throws IOException {
        JsonNode message = objectMapper.readTree(new String(messageBytes, "UTF-8"));

        addCommit.add(
            message.get("type").toString(),
            message.get("id").toString(),
            message.get("data"),
            message.get("meta")
        );
    }

    public CountDownLatch getLatch() {
        return latch;
    }
}