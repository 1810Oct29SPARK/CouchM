package com.revature.beans;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="USER_ROLE")
public class UserRole implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4690846072007280280L;

	@Override
	public String toString() {
		return "UserRole [id=" + id + ", role=" + role + "]";
	}

	public UserRole(int id, String role) {
		super();
		this.id = id;
		this.role = role;
	}
	
	public UserRole(String role) {
		super();
		this.role = role;
	}
	
	public UserRole(){
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userRoleSequence")
	@SequenceGenerator(allocationSize = 1, name = "userRoleSequence", sequenceName = "SQ_USER_ROLE_PK")
	@Column(name = "USER_ROLE_ID")
	private int id;

	@Column(name = "ROLE")
	private String role;
}
