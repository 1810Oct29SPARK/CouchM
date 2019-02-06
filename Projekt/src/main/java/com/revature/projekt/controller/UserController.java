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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.projekt.model.User;
import com.revature.projekt.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

	private UserService us;

	@Autowired
	public void setUserService(UserService us) {
		this.us = us;
	}

	@GetMapping("/all")
	public ResponseEntity<List<User>> getAllUsers() {
		return new ResponseEntity<>(us.findAllUsers(), HttpStatus.OK);
	}

	@GetMapping(value = "/users/{requestId}")
	public ResponseEntity<User> getUserById(@PathVariable String requestId) {
		int id = Integer.parseInt(requestId);
		return new ResponseEntity<>(us.getUserById(id), HttpStatus.OK);
	}

	@GetMapping(value = "/{name}")
	public ResponseEntity<User> getUserByName(@PathVariable String name) {
		return new ResponseEntity<>(us.findByName(name), HttpStatus.OK);
	}

	@PostMapping(value = "/delete")
	public void deleteUserById(@RequestBody String user) {
		JSONObject js = new JSONObject(user);
		int id = js.getInt("id");
		us.deleteUserbyId(id);
	}

	@PostMapping(value = "/create")
	public ResponseEntity<User> createUser(@RequestBody String userString) {
		JSONObject json = new JSONObject(userString);
		User user = new User();

		if (json != null) {
			user.setName(json.getString("name"));
		}

		return new ResponseEntity<>(HttpStatus.OK);
	}

}
