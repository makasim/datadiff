package com.datadiff.web;

import java.io.File;
import java.io.IOException;
import java.util.Map;
import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicLong;
import java.lang.String;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.stereotype.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;
import com.github.fge.jsonpatch.mergepatch.JsonMergePatch;
import com.github.fge.jsonpatch.JsonPatchException;
import com.github.fge.jsonpatch.diff.JsonDiff;
import com.github.fge.jsonpatch.JsonPatch;
import com.mongodb.DBObject;
import com.mongodb.util.JSON;
import com.mongodb.BasicDBObject;

@Controller
public class AuditViewController {

    @Autowired
    private AuditRepository auditRepository;

    @RequestMapping(value = "/audit/{auditId}/view", method = RequestMethod.GET)
    public ModelAndView getAuditHtml(@PathVariable String auditId) throws IOException, JsonPatchException {
        ObjectMapper mapper = new ObjectMapper();

        JsonNode data = mapper.readTree("{}");
        Audit audit = auditRepository.findByExternalId(auditId);
        ArrayList<DBObject> commits = new ArrayList<DBObject>();
        for (Commit auditCommit : audit.getCommits()) {
            JsonPatch patch = JsonPatch.fromJson(convert(auditCommit.getDiff()));
            data = patch.apply(data);

            DBObject commit = new BasicDBObject();
            commit.put("data", convert(data));
            commit.put("meta", auditCommit.getMeta());

            commits.add(commit);
        }

        ModelAndView model = new ModelAndView();
        model.setViewName("diff");
        model.addObject("commits", commits);

        return model;
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

