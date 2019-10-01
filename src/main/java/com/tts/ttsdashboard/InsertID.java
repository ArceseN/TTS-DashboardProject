package com.tts.ttsdashboard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import java.util.stream.Collectors;

@Configuration
public class InsertID implements RepositoryRestConfigurer {

        @Autowired
        private EntityManager entityManager;

        @Override
        public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
            config.exposeIdsFor(entityManager.getMetamodel().getEntities().stream().map(EntityType::getJavaType).collect(Collectors.toList()).toArray(new Class[0]));
        }

    }


