package com.revature.projekt.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.ModelAttribute;

@Entity
@Table(name = "USERS")
public class User implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column
	@NotNull
	@Value("Wastelander")
	private String name;

	@Column
	@NotNull
	@Value("1")
	private int strength;

	@Column
	@NotNull
	@Value("1")
	private int perception;

	@Column
	@NotNull
	@Value("1")
	private int endurance;

	@Column
	@NotNull
	@Value("1")
	private int charisma;

	@Column
	@NotNull
	@Value("1")
	private int intelligence;

	@Column
	@NotNull
	@Value("1")
	private int agility;

	@Column
	@NotNull
	@Value("1")
	private int luck;

	@Override
	public String toString() {
		return "User [name=" + name + ", strength=" + strength + ", perception=" + perception
				+ ", endurance=" + endurance + ", charisma=" + charisma + ", intelligence=" + intelligence
				+ ", agility=" + agility + ", luck=" + luck + "]";
	}

	public User(int id, String name, int strength, int perception, int endurance, int charisma, int intelligence,
			int agility, int luck) {
		super();
		this.id = id;
		this.name = name;
		this.strength = strength;
		this.perception = perception;
		this.endurance = endurance;
		this.charisma = charisma;
		this.intelligence = intelligence;
		this.agility = agility;
		this.luck = luck;
	}

	public User(@NotNull String name, @NotNull int strength, @NotNull int perception, @NotNull int endurance,
			@NotNull int charisma, @NotNull int intelligence, @NotNull int agility, @NotNull int luck) {
		super();
		this.name = name;
		this.strength = strength;
		this.perception = perception;
		this.endurance = endurance;
		this.charisma = charisma;
		this.intelligence = intelligence;
		this.agility = agility;
		this.luck = luck;
	}
	
	public User(@NotNull String name) {
		super();
		this.name = "Wastelander " + name;
	}

	public User() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getStrength() {
		return strength;
	}

	public void setStrength(int strength) {
		this.strength = strength;
	}

	public int getPerception() {
		return perception;
	}

	public void setPerception(int perception) {
		this.perception = perception;
	}

	public int getEndurance() {
		return endurance;
	}

	public void setEndurance(int endurance) {
		this.endurance = endurance;
	}

	public int getCharisma() {
		return charisma;
	}

	public void setCharisma(int charisma) {
		this.charisma = charisma;
	}

	public int getIntelligence() {
		return intelligence;
	}

	public void setIntelligence(int intelligence) {
		this.intelligence = intelligence;
	}

	public int getAgility() {
		return agility;
	}

	public void setAgility(int agility) {
		this.agility = agility;
	}

	public int getLuck() {
		return luck;
	}

	public void setLuck(int luck) {
		this.luck = luck;
	}

}
