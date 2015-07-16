package com.datadiff.web;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface AuditRepository extends MongoRepository<Audit, String> {
}
