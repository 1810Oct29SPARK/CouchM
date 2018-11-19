//First POJO!

public class Car {

	//constructor with no fields (a "no-args" constructor)
	public Car() {

		System.out.println("called no-args constructor");

	}

	//constructor with all the fields
	public Car (int yearManufactured, String model, String make) {
		//"this" refers to the Car object being created, NOT the arguement
		this.yearManufactured = yearManufactured;
		this.model = model;
		this.make = make;

	}

	//private instance variables, accessible only within the class
	private int yearManufactured;
	private String model;
	private String make;

	//getters and setters (accessors and mutators)
	public int getYearManufactured(){

		return this.yearManufactured;

	}

	public void setYearManufactured(int yearManufactured){
		this.yearManufactured = yearManufactured;
	}

	public String getModel(){
		return this.model;
	}

	public void setModel(String model){
		this.model = model;
	}

	public String getMake(){
		return this.make;
	}

	public void setMake(String make){
		this.make = make;
	}

}
