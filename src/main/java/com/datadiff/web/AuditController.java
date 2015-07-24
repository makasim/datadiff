package com.datadiff.web;

import java.io.IOException;
import java.lang.String;
import com.github.fge.jsonpatch.JsonPatchException;
import com.mongodb.BasicDBObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;
import com.github.fge.jsonpatch.diff.JsonDiff;
import com.mongodb.DBObject;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class AuditController {

    @Autowired
    private AuditRepository auditRepository;

    @Autowired
    private AuditViewConverter auditViewConverter;

    @Autowired
    private AddCommit addCommit;

    @Autowired
    ObjectMapper objectMapper;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public DBObject welcome() {
        DBObject result = new BasicDBObject();
        result.put("status", 200);
        result.put("name", "datadiff");
        result.put("version", "0.1.0");
        result.put("tagline", "audit your models");

        return result;
    }

    @RequestMapping(value = "/audit/{type}/{auditId}", method = RequestMethod.GET)
    public DBObject getAuditJson(@PathVariable String type, @PathVariable String auditId) throws IOException, JsonPatchException {
        return auditViewConverter.convert(auditRepository.findByTypeAndExternalId(type, auditId));
    }

    @RequestMapping(value = "/audit/{type}/{auditId}/view", method = RequestMethod.GET)
    public ModelAndView getAuditHtml(@PathVariable String type, @PathVariable String auditId) throws IOException, JsonPatchException {
        ModelAndView model = new ModelAndView();
        model.setViewName("view");

        return model;
    }

    @RequestMapping(value = "/audit/{type}/{auditId}/commit", method = RequestMethod.POST, headers = "content-type=application/json")
    public DBObject addCommit(@PathVariable String type, @PathVariable String auditId, @RequestBody String requestBody) throws IOException, JsonPatchException {
        JsonNode requestBodyNode = objectMapper.readTree(requestBody);
        JsonNode newData = requestBodyNode.get("data");
        JsonNode meta = requestBodyNode.get("meta");

        Audit audit = addCommit.add(type, auditId, newData, meta);

        return auditViewConverter.convert(audit);
    }
}

