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
	private int ranger;
	private int assault;
	private int defense;
	private String[] perks;

	public User(String id, String name, int ranger, int assault, int defense, String[] perks) {
		super();
		this.id = id;
		this.name = name;
		this.ranger = ranger;
		this.assault = assault;
		this.defense = defense;
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

	public String[] getPerks() {
		return perks;
	}

	public void setPerks(String[] perks) {
		this.perks = perks;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", ranger=" + ranger + ", assault=" + assault + ", defense="
				+ defense + ", perks=" + Arrays.toString(perks) + "]";
	}

}
