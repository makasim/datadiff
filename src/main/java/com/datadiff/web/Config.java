package com.datadiff.web;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
 public class Config {
     @Bean
     public MongoJaksonConverter mongoJaksonConverter() {
         return new MongoJaksonConverter();
     }

    @Bean
    public AuditViewConverter auditViewConverter() {
        return new AuditViewConverter();
    }
 }