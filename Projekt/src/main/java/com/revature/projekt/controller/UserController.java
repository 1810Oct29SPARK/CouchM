package com.revature.projekt.controller;

import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.projekt.model.User;
import com.revature.projekt.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class UserController {

	private UserService us;

	@Autowired
	public void setUserService(UserService us) {
		this.us = us;
	}

	/**
	 * returns all users, tested with Postman
	 */
	@GetMapping("/all")
	public ResponseEntity<List<User>> getAllUsers() {
		return new ResponseEntity<>(us.findAllUsers(), HttpStatus.OK);
	}

	/**
	 * returns user by their id, tested with Postman
	 */
	@GetMapping(value = "/users/{requestId}")
	public ResponseEntity<User> getUserById(@PathVariable String requestId) {
		int id = Integer.parseInt(requestId);
		return new ResponseEntity<>(us.getUserById(id), HttpStatus.OK);
	}

	/**
	 * returns user by their name, tested with Postman
	 */
	@GetMapping(value = "/{name}")
	public ResponseEntity<User> getUserByName(@PathVariable String name) {
		return new ResponseEntity<>(us.findByName(name), HttpStatus.OK);
	}

	/**
	 * deletes user by their id, tested successfully with postman
	 */
	@PostMapping(value = "/delete")
	public void deleteUserById(@RequestBody String user) {
		JSONObject js = new JSONObject(user);
		int id = js.getInt("id");
		us.deleteUserbyId(id);
	}

	/**
	 * creates user with only inputting a name, tested successfully with postman
	 */
	@PostMapping(value = "/create")
	public ResponseEntity<User> createUser(@RequestBody String userString) {
		JSONObject json = new JSONObject(userString);
		User user = new User();

		if (json != null) {
			user.setName(json.getString("name"));
		}

		user.setStrength(1);
		user.setPerception(1);
		user.setEndurance(1);
		user.setCharisma(1);
		user.setIntelligence(1);
		user.setAgility(1);
		user.setLuck(1);
		us.createUser(user);

		return new ResponseEntity<>(HttpStatus.OK);
	}

	/**
	 * updates user by their id with new values for SPECIAL stats, tested successfully with postman
	 */
	@PutMapping(value = "/update")
	public void updateUser(@RequestBody String userString) {
		JSONObject json = new JSONObject(userString);
		User user = new User();

		if (json != null) {
			user.setId(json.getInt("id"));
			user.setName(json.getString("name"));
			user.setStrength(json.getInt("strength"));
			user.setPerception(json.getInt("perception"));
			user.setEndurance(json.getInt("endurance"));
			user.setCharisma(json.getInt("charisma"));
			user.setIntelligence(json.getInt("intelligence"));
			user.setAgility(json.getInt("agility"));
			user.setLuck(json.getInt("luck"));
			us.updateUser(user);
		}
	}

}
