//First POJO!

public class Car extends Vehicle {

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

	//declared a static variable and assigned it a value of 5000
	//hon hon hon hon
	public static int milesBetweenOilChanges = 5000;

	//private instance variables, accessible only within the class
	private int yearManufactured;
	private String model;
	private String make;
	private int milesSinceOilChange; //this instance variable tracks miles since last oil change

	//getters and setters (accessors and mutators)
	public int getYearManufactured(){
		return this.yearManufactured;
	}

	public void setYearManufactured(int year){
		this.yearManufactured = year;
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

	public int getMilesSinceOilChange(){
		return this.milesSinceOilChange;
	}

	public void setMilesSinceOilChange(int miles){
		this.milesSinceOilChange = miles;
	}

	//override inherited move() method
	@Override	//doesn't DO anything, checks to see if method is in parent class
	public void move(){
		System.out.println("Car is moving");
	}
	//it's the same method as the one inherited from Vehicle,
	//but with a new method body
}
