package com.revature.projekt.controller;

import java.util.Collection;

import org.json.JSONArray;
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
@RequestMapping("/user")
public class UserController {

	private UserService us;

	@Autowired
	public void setUserService(UserService us) {
		this.us = us;
	}

	@GetMapping("/all")
	public ResponseEntity<Collection<User>> getAllUsers() {
		return new ResponseEntity<>(us.getAllUsers(), HttpStatus.OK);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<User> getUserById(@PathVariable String id) {
		return new ResponseEntity<>(us.getUserById(id), HttpStatus.OK);
	}

	@GetMapping(value = "/{name}")
	public ResponseEntity<User> getUserByName(@PathVariable String name) {
		return new ResponseEntity<>(us.findByName(name), HttpStatus.OK);
	}

	@PostMapping(value = "/delete")
	public void deleteUserById(@RequestBody String user) {
		JSONObject js = new JSONObject(user);
		String id = js.getString("id");
		us.deleteUserbyId(id);
	}

	@PostMapping(value = "/create")
	public ResponseEntity<User> createUser(@RequestBody String name) {
		JSONObject json = new JSONObject(name);
		System.out.println("Creating User with: " + json);
		User user = new User();

		if (json != null) {
			user.setName(json.getString("name"));
		}

		String[] perks = { "", "", "" };

		user.setHealth(10);
		user.setRanger(1);
		user.setAssault(1);
		user.setDefense(1);
		user.setMove(5);
		user.setPerks(perks);
		User returnUserData = us.createUser(user);
		System.out.println("Created User's data: " + returnUserData.toString());

		return new ResponseEntity<>(returnUserData, HttpStatus.OK);
	}

	@PutMapping(value = "/update")
	public ResponseEntity<User> updateUser(@RequestBody String userString) {
		JSONObject json = new JSONObject(userString);
		System.out.println("Updating User with: " + json);
		User user = new User();

		if (json != null) {
			user = us.getUserById(json.getString("id"));
			if (user != null) {
				System.out.println("Found a matching User ID");
				if (json.getString("name") != null) {
					user.setName(json.getString("name"));
				}
				if ((Integer) json.getInt("health") != null) {
					user.setHealth(json.getInt("health"));
				}
				if ((Integer) json.getInt("ranger") != null) {
					user.setRanger(json.getInt("ranger"));
				}
				if ((Integer) json.getInt("assault") != null) {
					user.setAssault(json.getInt("assault"));
				}
				if ((Integer) json.getInt("defense") != null) {
					user.setDefense(json.getInt("defense"));
				}
				if ((Integer) json.getInt("move") != null) {
					user.setMove(json.getInt("move"));
				}

				if (json.getJSONArray("perks") != null) {
					String[] perks = new String[3];
					JSONArray arr = new JSONArray();
					arr = json.getJSONArray("perks");
					for (int i = 0; i < arr.length(); i++) {
						perks[i] = arr.optString(i);
					}
					user.setPerks(perks);
				}
			}
		}
		User returnUserData = us.updateUser(user);
		System.out.println("Updated User's data: " + returnUserData.toString());

		return new ResponseEntity<>(returnUserData, HttpStatus.OK);
	}

}
