package com.datadiff.web;

import java.io.File;
import java.io.IOException;
import java.util.Map;
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

@RestController
public class AuditController {

    @Autowired
    private AuditRepository auditRepository;

    @RequestMapping(value = "/audit/{auditId}", method = RequestMethod.GET)
    public Audit getAudit(@PathVariable String auditId) throws IOException {
        Audit audit = auditRepository.findOne(auditId);

        return audit;
    }

    @RequestMapping(value = "/audit/{auditId}/commit", method = RequestMethod.POST)
    public Audit addCommit(@PathVariable String auditId, @RequestBody String requestBody) throws IOException {
        Audit audit = auditRepository.findOne(auditId);

        ObjectMapper mapper = new ObjectMapper();
        JsonNode currentData = mapper.readTree(audit.getData().toString());
        JsonNode newData = mapper.readTree(requestBody);
        JsonNode diff = JsonDiff.asJson(currentData, newData);

        audit.addCommit(convert(diff));
        audit.setData((convert(newData)));

        auditRepository.save(audit);

        return audit;
    }

    private DBObject convert(JsonNode input) throws IOException {
        ObjectMapper mapper = new ObjectMapper();

        return (DBObject) JSON.parse(mapper.writeValueAsString(input));
    }
}

