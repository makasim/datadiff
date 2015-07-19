package com.datadiff.web;

import com.mongodb.DBObject;
import com.mongodb.BasicDBObject;

public class Commit {

    private DBObject diff;

    private DBObject meta;

    public Commit() {
        this.diff = new BasicDBObject();
        this.meta = new BasicDBObject();
    }

    public Commit(DBObject diff, DBObject meta) {
        this.diff = diff;
        this.meta = meta;
    }

    public DBObject getDiff()
    {
        return diff;
    }

    public DBObject getMeta()
    {
        return meta;
    }
}