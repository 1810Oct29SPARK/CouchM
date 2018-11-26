package com.revature.transport;

public class Boat extends Vehicle {

	public Boat(String color, double hullLengthInMeters) {
		super();
		this.color = color;
		this.hullLengthInMeters = hullLengthInMeters;
	}

	public Boat() {
		super();
		
	}
	
	protected String color;
	protected double hullLengthInMeters;
	

	@Override
	public void move() {
		System.out.println("Boat is moving");

	}


	public String getColor() {
		return color;
	}


	public void setColor(String color) {
		this.color = color;
	}


	public double getHullLengthInMeters() {
		return hullLengthInMeters;
	}


	public void setHullLengthInMeters(double hullLengthInMeters) {
		this.hullLengthInMeters = hullLengthInMeters;
	}


	@Override
	public String toString() {
		return "Boat [color=" + color + ", hullLengthInMeters=" + hullLengthInMeters + "]";
	}


}
