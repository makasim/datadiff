package com.datadiff.web;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.fge.jsonpatch.JsonPatch;
import com.github.fge.jsonpatch.JsonPatchException;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.util.ArrayList;

public class AuditViewConverter
{
    @Autowired
    private MongoJaksonConverter converter;

    @Autowired
    ObjectMapper objectMapper;

    public DBObject convert(Audit audit) throws IOException, JsonPatchException {
//        JsonNode data = objectMapper.readTree("{}");
        ArrayList<DBObject> commits = new ArrayList<DBObject>();
        audit.getCommits();
        for (Commit auditCommit : audit.getCommits()) {
//            if (null != auditCommit.getDiff()) {
//                JsonPatch patch = JsonPatch.fromJson(converter.convert(auditCommit.getDiff()));
//                data = patch.apply(data);
//            }

            DBObject commit = new BasicDBObject();
//            commit.put("data", converter.convert(data));
            commit.put("diff", auditCommit.getDiff());
            commit.put("meta", auditCommit.getMeta());

            commits.add(commit);
        }

        DBObject viewAudit = new BasicDBObject();
        viewAudit.put("commits", commits);

        return viewAudit;
    }
}
