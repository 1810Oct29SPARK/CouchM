package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.User;
import com.revature.repositories.UserDAO;

@RestController
@RequestMapping(value = "/api")
public class UserController {

	private UserDAO ud;

	@Autowired
	public void setUserDAO(UserDAO ud) {
		this.ud = ud;
	}

	@GetMapping("/all")
	public ResponseEntity<List<User>> getAllUsers() {
		return new ResponseEntity<>(ud.findAll(), HttpStatus.OK);
	}

	@GetMapping("/byName/{name}")
	public ResponseEntity<User> getByUserName(@PathVariable String name) {
		return new ResponseEntity<>(ud.getByName(name), HttpStatus.OK);
	}

	@PostMapping("/addUser")
	public ResponseEntity<String> addUser(@RequestBody User user) {

		ResponseEntity<String> resp = null;
		try {
			ud.save(user);
			resp = new ResponseEntity<>("User created!", HttpStatus.OK);
		} catch (Exception e) {
			resp = new ResponseEntity<>("Failed to create new User!", HttpStatus.BAD_REQUEST);
		}
		return resp;
	}
}
