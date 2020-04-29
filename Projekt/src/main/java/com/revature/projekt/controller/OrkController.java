package com.revature.projekt.controller;

import java.util.Collection;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.projekt.model.Ork;
import com.revature.projekt.service.OrkService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/ork")
public class OrkController {

	@Autowired
	private OrkService os;

	@GetMapping("/all")
	public ResponseEntity<Collection<Ork>> getAllOrks() {
		return new ResponseEntity<>(os.getAllOrks(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Ork> getOrkById(String id) {
		return new ResponseEntity<>(os.getOrkById(id), HttpStatus.OK);
	}

	@GetMapping("/create")
	public ResponseEntity<Ork> createOrk() {
		Ork ork = new Ork();
		ork.setHealth(5);
		ork.setRanger(1);
		ork.setAssault(2);
		ork.setDefense(2);
		ork.setMove(3);
		return new ResponseEntity<>(os.createOrk(ork), HttpStatus.OK);
	}

	@PutMapping("/update")
	public ResponseEntity<Ork> updateOrk(@RequestBody String orkString) {
		JSONObject json = new JSONObject(orkString);
		Ork ork = new Ork();

		ork = os.getOrkById(json.getString("id"));
		if (ork != null) {
			System.out.println("Found an ork");
			ork.setHealth(json.getInt("health"));
			ork.setRanger(json.getInt("ranger"));
			ork.setAssault(json.getInt("assault"));
			ork.setDefense(json.getInt("defense"));
			ork.setMove(json.getInt("move"));
		}
		return new ResponseEntity<>(os.updateOrk(ork), HttpStatus.OK);
	}

	@PostMapping("/delete")
	public void deleteOrk(@RequestBody String ork) {
		JSONObject json = new JSONObject(ork);
		String id = json.getString("id");
		System.out.println("Slain Ork's ID: " + id);
		os.deleteOrk(id);
	}
}
