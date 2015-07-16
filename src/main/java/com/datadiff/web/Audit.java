package com.datadiff.web;

import org.springframework.data.annotation.Id;
import com.mongodb.DBObject;
import com.mongodb.BasicDBObject;
import java.util.ArrayList;

public class Audit {

    @Id
    private String id;

    private DBObject data;
    private ArrayList<DBObject> commits;

    public Audit() {
        this.data = new BasicDBObject();
        this.commits = new ArrayList<DBObject>();
    }

    public void setData(DBObject data) {
        this.data = data;
    }

    public DBObject getData() {
        return this.data;
    }

    public void addCommit(DBObject diff) {
        DBObject commit = new BasicDBObject();
        commit.put("diff", diff);

        commits.add(commit);
    }

    public ArrayList<DBObject> getCommits() {
        return commits;
    }
}