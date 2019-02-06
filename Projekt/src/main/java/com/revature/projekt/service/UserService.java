package com.revature.projekt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.projekt.model.User;
import com.revature.projekt.repository.UserRepository;

@Service("userService")
public class UserService {

	private UserRepository ur;

	/**
	 * Simply a setter method that will initialize the UserRepository
	 * 
	 * @param userRepo
	 */
	@Autowired
	public void setUserRepository(UserRepository ur) {
		this.ur = ur;
	}
	
	public void createUser(User user) {
		ur.save(user);
	}
	
	public int updateUser(User user) {
		User u = ur.save(user);
		if ( u!= null) {
			return u.getId();
		} else {
			return 0;
		}
	}

	/**
	 * @return a list of all users in database with the UserRepository method
	 */
	public List<User> findAllUsers() {
		return ur.findAll();
	}
	
	public void deleteUserbyId(int id) {
		ur.deleteById(id);
	}
	
	public User getUserById(int id) {
		Optional<User> u = ur.findById(id);
		if (u.isPresent()) {
			return u.get();
		} else {
			return null;
		}
	}
	
	public User findByName(String name) {
		return ur.findByName(name);
	}

}
