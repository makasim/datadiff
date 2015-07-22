package com.datadiff.web;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.DBObject;
import com.mongodb.util.JSON;

import java.io.IOException;

public class MongoJaksonConverter
{
    public DBObject convert(JsonNode input) throws IOException {
        ObjectMapper mapper = new ObjectMapper();

        return (DBObject) JSON.parse(mapper.writeValueAsString(input));
    }

    public JsonNode convert(DBObject input) throws IOException {
        ObjectMapper mapper = new ObjectMapper();

        return mapper.readTree(input.toString());
    }
}
