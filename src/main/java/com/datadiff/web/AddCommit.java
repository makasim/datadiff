package com.datadiff.web;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.fge.jsonpatch.diff.JsonDiff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class AddCommit {

    @Autowired
    private AuditRepository auditRepository;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    private MongoJaksonConverter converter;

    Audit add(String type, String auditId, JsonNode newData, JsonNode meta) throws IOException {
        Audit audit = auditRepository.findByTypeAndExternalId(type, auditId);
        if (audit == null) {
            audit = new Audit();
            audit.setExternalId(auditId);
            audit.setType(type);

            auditRepository.save(audit);
        }

        JsonNode currentData = objectMapper.readTree(audit.getCurrentData().toString());

        JsonNode diff = JsonDiff.asJson(currentData, newData);

        Commit commit = new Commit(converter.convert(diff), converter.convert(meta));
        audit.addCommit(converter.convert(newData), commit);

        auditRepository.save(audit);

        return audit;
    }
}
