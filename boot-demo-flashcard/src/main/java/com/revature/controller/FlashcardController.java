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

import com.revature.beans.Category;
import com.revature.beans.Flashcard;
import com.revature.repositories.FlashcardDAO;

@RestController
@RequestMapping(value="/api")
public class FlashcardController {
	
	private FlashcardDAO fd;
	
	@Autowired
	public void setFlashcardDAO(FlashcardDAO fd) {
		this.fd = fd;
	}

	@GetMapping("/all")
	public ResponseEntity<List<Flashcard>> getAllFlashcards(){
		return new ResponseEntity<>(fd.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/byCategory/{catId}")
	public ResponseEntity<List<Flashcard>> getAllFlashcardsByCategory(@PathVariable int catId){
		return new ResponseEntity<>(fd.getByCategory(new Category(catId, null)), HttpStatus.OK);
	}
	
	@PostMapping("/addFlashcard")
	public ResponseEntity<String> addFlashcard(@RequestBody Flashcard flashcard) {

		ResponseEntity<String> resp = null;
		try {
			fd.save(flashcard);
			resp = new ResponseEntity<>("FLASHCARD CREATED SUCCESSFULLY", HttpStatus.OK);
		} catch (Exception e) {
			resp = new ResponseEntity<>("FAILED TO CREATE FLASHCARD", HttpStatus.BAD_REQUEST);
		}
		return resp;
	}
	
}
