package com.revature.projekt.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.revature.projekt.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, Integer> {

}
