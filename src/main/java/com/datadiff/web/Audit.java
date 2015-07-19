package com.datadiff.web;

import org.springframework.data.annotation.Id;
import com.mongodb.DBObject;
import com.mongodb.BasicDBObject;
import java.util.ArrayList;

public class Audit {

    @Id
    private String id;

    private String externalId;

    private DBObject currentData;

    private ArrayList<DBObject> diffs;

    private ArrayList<DBObject> metas;

    public Audit() {
        this.currentData = new BasicDBObject();
        this.diffs = new ArrayList<DBObject>();
        this.metas = new ArrayList<DBObject>();
    }

    public String getExternalId()
    {
        return externalId;
    }

    public void setExternalId(String externalId)
    {
        this.externalId = externalId;
    }

    public DBObject getCurrentData() {
        return this.currentData;
    }

    public void addCommit(DBObject currentData, Commit commit) {
        this.currentData = currentData;

        diffs.add(commit.getDiff());
        metas.add(commit.getMeta());
    }

    public ArrayList<Commit> getCommits() {

        // TODO use static array.
        ArrayList<Commit> commits = new ArrayList();

        int index = 0;
        for (DBObject diff : diffs) {
            Commit commit = new Commit(diff, metas.get(index));
            commits.add(commit);

            index++;
        }

        return commits;
    }
}