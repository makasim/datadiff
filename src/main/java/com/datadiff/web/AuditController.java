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
    private MongoJaksonConverter converter;

    @Autowired
    private AuditViewConverter auditViewConverter;

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

    @RequestMapping(value = "/audit/{type}/{auditId}.html", method = RequestMethod.GET)
    public ModelAndView getAuditHtml(@PathVariable String type, @PathVariable String auditId) throws IOException, JsonPatchException {
        Audit audit = auditRepository.findByTypeAndExternalId(type, auditId);

        DBObject auditView = auditViewConverter.convert(audit);

        ModelAndView model = new ModelAndView();
        model.setViewName("diff");
        model.addObject("audit", auditView);

        return model;
    }

    @RequestMapping(value = "/audit/{type}/{auditId}/commit", method = RequestMethod.POST, headers = "content-type=application/json")
    public Audit addCommit(@PathVariable String type, @PathVariable String auditId, @RequestBody String requestBody) throws IOException {
        Audit audit = auditRepository.findByTypeAndExternalId(type, auditId);
        if (audit == null) {
            audit = new Audit();
            audit.setExternalId(auditId);
            audit.setType(type);

            auditRepository.save(audit);
        }

        ObjectMapper mapper = new ObjectMapper();

        JsonNode requestBodyNode = mapper.readTree(requestBody);
        JsonNode newData = requestBodyNode.get("data");
        JsonNode meta = requestBodyNode.get("meta");
        JsonNode currentData = mapper.readTree(audit.getCurrentData().toString());

        JsonNode diff = JsonDiff.asJson(currentData, newData);

        Commit commit = new Commit(converter.convert(diff), converter.convert(meta));
        audit.addCommit(converter.convert(newData), commit);

        auditRepository.save(audit);

        return audit;
    }
}

