package com.revature.transport;

public class Car extends Vehicle {
	
	public Car(int yearManufactured, String make, String model, double milesSinceOilChange) {
		super();
		this.yearManufactured = yearManufactured;
		this.make = make;
		this.model = model;
		this.milesSinceOilChange = milesSinceOilChange;
	}

	public Car() {
		super(); // calls Vehicle
		
	}

	public static int recommendedMilesBetweenOilChanges = 5000;
	
	private int yearManufactured;
	private String make;
	private String model;
	private double milesSinceOilChange;
	
	@Override
	public void move() {
		System.out.println("car is moving");
	}

	public int getYearManufactured() {
		return yearManufactured;
	}

	public void setYearManufactured(int yearManufactured) {
		this.yearManufactured = yearManufactured;
	}

	public String getMake() {
		return make;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public double getMilesSinceOilChange() {
		return milesSinceOilChange;
	}

	public void setMilesSinceOilChange(double milesSinceOilChange) {
		this.milesSinceOilChange = milesSinceOilChange;
	}

	@Override
	public String toString() {
		return "Car [yearManufactured=" + yearManufactured + ", make=" + make + ", model=" + model
				+ ", milesSinceOilChange=" + milesSinceOilChange + "]";
	}
	
}
