package com.datadiff.web;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface AuditRepository extends MongoRepository<Audit, String> {
    public Audit findByTypeAndExternalId(String type, String externalId);
}
