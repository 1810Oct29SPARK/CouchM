package com.revature.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.User;
import com.revature.beans.UserRole;

@Repository
public interface UserDAO extends JpaRepository<User, Integer> {
	// ask Emily why "Integer" is the second list parameter
	public User getByName(String name);

}
