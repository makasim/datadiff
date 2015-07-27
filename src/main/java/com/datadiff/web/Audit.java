package com.datadiff.web;

import org.springframework.data.annotation.Id;
import com.mongodb.DBObject;
import com.mongodb.BasicDBObject;
import org.springframework.data.mongodb.core.index.CompoundIndex;
import org.springframework.data.mongodb.core.index.CompoundIndexes;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document(collection = "datadiff_audit")
@CompoundIndexes(value = {
    @CompoundIndex(name = "type_externalId", def = "{'type': 1, 'externalId': 1}", unique = true)
})
public class Audit {

    @Id
    private String id;

    private String externalId;

    private String type;

    private ArrayList<DBObject> diffs;

    private ArrayList<DBObject> metas;

    public Audit() {
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

    public String getType()
    {
        return type;
    }

    public void setType(String type)
    {
        this.type = type;
    }

    public void addCommit(Commit commit) {
        diffs.add(commit.getDiff());
        metas.add(commit.getMeta());
    }

    public ArrayList<Commit> getCommits() {

        // TODO use static array.
        ArrayList<Commit> commits = new ArrayList<Commit>();

        int index = 0;
        for (DBObject diff : diffs) {
            Commit commit = new Commit(diff, metas.get(index));
            commits.add(commit);

            index++;
        }

        return commits;
    }
}