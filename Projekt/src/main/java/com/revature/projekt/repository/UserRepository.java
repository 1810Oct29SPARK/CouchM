package com.revature.projekt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.projekt.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	public User findByName(String name);
	
}
