package com.revature.projekt.model;

import java.io.Serializable;
import java.util.Arrays;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	private String id;
	private String name;
	private int health;
	private int ranger;
	private int assault;
	private int defense;
	private int move;
	private String[] perks;
	private String creationDate;

	public User(String id, String name, int health, int ranger, int assault, int defense, int move, String[] perks) {
		super();
		this.id = id;
		this.name = name;
		this.health = health;
		this.ranger = ranger;
		this.assault = assault;
		this.defense = defense;
		this.move = move;
		this.perks = perks;
	}

	public User() {
		super();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getHealth() {
		return health;
	}

	public void setHealth(int health) {
		this.health = health;
	}

	public int getRanger() {
		return ranger;
	}

	public void setRanger(int ranger) {
		this.ranger = ranger;
	}

	public int getAssault() {
		return assault;
	}

	public void setAssault(int assault) {
		this.assault = assault;
	}

	public int getDefense() {
		return defense;
	}

	public void setDefense(int defense) {
		this.defense = defense;
	}

	public int getMove() {
		return move;
	}

	public void setMove(int move) {
		this.move = move;
	}

	public String[] getPerks() {
		return perks;
	}

	public void setPerks(String[] perks) {
		this.perks = perks;
	}

	public String getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(String creationDate) {
		this.creationDate = creationDate;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", health=" + health + ", ranger=" + ranger + ", assault="
				+ assault + ", defense=" + defense + ", move=" + move + ", perks=" + Arrays.toString(perks)
				+ ", creationDate=" + creationDate + "]";
	}

}
