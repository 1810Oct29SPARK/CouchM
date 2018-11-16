public class Driver {

	public static void main(String[] args) {

		System.out.println("this is the point of entry into my program");
		//make a car object with no set fields
		//declare the variable carOne and assign a new Car to it
		Car carOne = new Car();
		//toString is a method inherited from Object
		System.out.println("carOne: "+carOne.toString());

		//make a car object with instance variables set in the constructor
		//declare the variable CarTwo and assign a new Car to it
		Car carTwo = new Car(2000, "Wrangler", "Jeep");
		//check out the toString result
		System.out.println("carTwo: "+carTwo.toString());

		//try to view the instance variables of carTwo
		//this DOES NOT compile		System.out.println(carTwo.model);
		System.out.println("model of carTwo: " + carTwo.getModel());

		//reset the model of carTwo
		carTwo.setModel("Renegade");
		System.out.println("model of carTwo: " + carTwo.getModel());

		//testout carTwo inherited move() method
		carTwo.move();
	}

}
