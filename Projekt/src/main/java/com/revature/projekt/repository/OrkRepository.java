package com.revature.projekt.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.revature.projekt.model.Ork;

@Repository
public interface OrkRepository extends MongoRepository<Ork, Integer> {

}
