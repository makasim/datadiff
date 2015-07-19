package com.datadiff.web;

import java.io.File;
import java.io.IOException;
import java.util.Map;
import java.util.List;
import java.lang.String;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;
import com.github.fge.jsonpatch.diff.JsonDiff;
import com.mongodb.DBObject;
import com.mongodb.util.JSON;
import com.mongodb.BasicDBObject;

@RestController
public class AuditController {

    @Autowired
    private AuditRepository auditRepository;

    @RequestMapping(value = "/audit/{auditId}", method = RequestMethod.GET)
    public Audit getAuditJson(@PathVariable String auditId) throws IOException {
        Audit audit = auditRepository.findByExternalId(auditId);

        return audit;
    }

    @RequestMapping(value = "/audit/{auditId}/commit", method = RequestMethod.POST, headers = "content-type=application/json")
    public Audit addCommit(@PathVariable String auditId, @RequestBody String requestBody) throws IOException {
        Audit audit = auditRepository.findByExternalId(auditId);
        if (audit == null) {
            audit = new Audit();
            audit.setExternalId(auditId);

            auditRepository.save(audit);
        }

        ObjectMapper mapper = new ObjectMapper();

        JsonNode requestBodyNode = mapper.readTree(requestBody);
        JsonNode newData = requestBodyNode.get("data");
        JsonNode meta = requestBodyNode.get("meta");
        JsonNode currentData = mapper.readTree(audit.getCurrentData().toString());

        JsonNode diff = JsonDiff.asJson(currentData, newData);

        Commit commit = new Commit(convert(diff), convert(meta));
        audit.addCommit(convert(newData), commit);

        auditRepository.save(audit);

        return audit;
    }

    private DBObject convert(JsonNode input) throws IOException {
        ObjectMapper mapper = new ObjectMapper();

        return (DBObject) JSON.parse(mapper.writeValueAsString(input));
    }

    private JsonNode convert(DBObject input) throws IOException {
        ObjectMapper mapper = new ObjectMapper();

        return mapper.readTree(input.toString());
    }
}

