package com.revature.projekt.service;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.revature.projekt.model.User;
import com.revature.projekt.repository.UserRepository;

@Service("userService")
public class UserService {

	@Autowired
	private UserRepository ur;

	@Autowired
	MongoTemplate mongoTemplate;

	Query query = new Query();

	public User createUser(User user) {
		return ur.save(user);
	}

	public Collection<User> getAllUsers() {
		return ur.findAll();
	}

	public User updateUser(User user) {
		User u = ur.save(user);
		if (u != null) {
			return u;
		} else {
			return null;
		}
	}

	public void deleteUserbyId(String id) {
		User user = this.getUserById(id);
		ur.delete(user);
	}

	public User getUserById(String id) {
		User data = mongoTemplate.findById(id, User.class);
		return data;
	}

	public User findByName(String name) {
		Criteria userName = Criteria.where("name").is(name);
		query.addCriteria(userName);
		User data = mongoTemplate.findOne(query, User.class);
		return data;
	}

}
