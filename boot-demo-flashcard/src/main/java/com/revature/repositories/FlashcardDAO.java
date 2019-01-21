package com.revature.repositories;

import java.util.List; 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.Category;
import com.revature.beans.Flashcard;

@Repository
public interface FlashcardDAO extends JpaRepository<Flashcard, Integer> {

	// other choices for Repository - CrudRepository (supertype) and
	// PagingAndSortingRepository

	public List<Flashcard> getByCategory(Category c);
}