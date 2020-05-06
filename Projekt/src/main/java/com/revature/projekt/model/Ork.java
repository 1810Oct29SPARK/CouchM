package com.revature.projekt.model;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "orks")
public class Ork implements Serializable {

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

	public Ork(String id, String name, int health, int ranger, int assault, int defense, int move) {
		super();
		this.id = id;
		this.name = name;
		this.health = health;
		this.ranger = ranger;
		this.assault = assault;
		this.defense = defense;
		this.move = move;
	}

	public Ork() {
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

	@Override
	public String toString() {
		return "Ork [id=" + id + ", name=" + name + ", health=" + health + ", ranger=" + ranger + ", assault=" + assault
				+ ", defense=" + defense + ", move=" + move + "]";
	}

}
