package com.datadiff.web;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.DBObject;
import com.mongodb.util.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class MongoJaksonConverter
{
    @Autowired
    ObjectMapper objectMapper;

    public DBObject convert(JsonNode input) throws IOException {
        return (DBObject) JSON.parse(objectMapper.writeValueAsString(input));
    }

    public JsonNode convert(DBObject input) throws IOException {
        return objectMapper.readTree(input.toString());
    }
}
