package com.revature.projekt.controller;

import java.util.Collection;

import org.bson.types.ObjectId;
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
@CrossOrigin(origins = "http://localhost:4200")
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
	public ResponseEntity<Collection<User>> getAllUsers() {
		return new ResponseEntity<>(us.getAllUsers(), HttpStatus.OK);
	}

	/**
	 * returns user by their id, tested with Postman
	 */
	@GetMapping(value = "/users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable String id) {
		return new ResponseEntity<>(us.getUserById(id), HttpStatus.OK);
	}

	/**
	 * returns user by their name, tested with Postman
	 */
	@GetMapping(value = "/name/{name}")
	public ResponseEntity<User> getUserByName(@PathVariable String name) {
		return new ResponseEntity<>(us.findByName(name), HttpStatus.OK);
	}

	/**
	 * deletes user by their id, tested successfully with postman
	 */
	@PostMapping(value = "/delete")
	public void deleteUserById(@RequestBody String user) {
		JSONObject js = new JSONObject(user);
		String id = js.getString("_id");
		us.deleteUserbyId(id);
	}

	/**
	 * creates user with only inputting a name, tested successfully with
	 * postman @ModelAttribute("user")
	 */
	@PostMapping(value = "/create/name")
	public ResponseEntity<User> createUser(@RequestBody String name) {
		JSONObject json = new JSONObject(name);
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
		User returnUserData = us.createUser(user);

		return new ResponseEntity<>(returnUserData, HttpStatus.OK);
	}

	/**
	 * creates user with all fields, tested successfully with
	 * postman @ModelAttribute("user")
	 */
	@PostMapping(value = "/create/stats")
	public ResponseEntity<User> createUser(@RequestBody User user) {
		JSONObject json = new JSONObject(user);
		User newUser = new User();

		if (json != null) {
			newUser.setName(json.getString("name"));
			newUser.setStrength(json.getInt("strength"));
			newUser.setPerception(json.getInt("perception"));
			newUser.setEndurance(json.getInt("endurance"));
			newUser.setCharisma(json.getInt("charisma"));
			newUser.setIntelligence(json.getInt("intelligence"));
			newUser.setAgility(json.getInt("agility"));
			newUser.setLuck(json.getInt("luck"));
		}
		User returnUserData = us.createUser(newUser);

		return new ResponseEntity<>(returnUserData, HttpStatus.OK);
	}

	/**
	 * updates user by their id with new values for SPECIAL stats, will need to
	 * search for user by id
	 * 
	 * in the meantime, do not create user until they've entered their stats
	 */
	@PutMapping(value = "/update")
	public User updateUser(@RequestBody String userString) {
		JSONObject json = new JSONObject(userString);
		User user = new User();

		if (json != null) {
			user = us.getUserById(json.getString("id"));
			if (user != null) {

				user.setName(json.getString("name"));
				user.setStrength(json.getInt("strength"));
				user.setPerception(json.getInt("perception"));
				user.setEndurance(json.getInt("endurance"));
				user.setCharisma(json.getInt("charisma"));
				user.setIntelligence(json.getInt("intelligence"));
				user.setAgility(json.getInt("agility"));
				user.setLuck(json.getInt("luck"));
			}
		}
		return us.updateUser(user);
	}

}
