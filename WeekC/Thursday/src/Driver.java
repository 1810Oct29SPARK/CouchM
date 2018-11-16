public class Driver {

	public static void main(String[] args) {
		//make some cars
		Car myCar = new Car(1994,"Rabbit","Volkswagon");
		Horse myHorse = new Horse(9,"My Horse","Amazing");
		Car myOtherCar = new Car(2018,"Model 3","Tesla");
		myCar.setMilesSinceOilChange(100);
		if (myCar.getMilesSinceOilChange() >= Car.milesBetweenOilChanges){
			System.out.println("Time to change the oil");
		} else {
			int milesLeft = Car.milesBetweenOilChanges - myCar.getMilesSinceOilChange();
			System.out.println("You have " + milesLeft + " miles left");
		}
	}

	public static void init() {

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

		//declared a variable 'garage'
			//which is an array of vehicles
		//created an empty array with 5 elements
			//and assigned it to 'garage'
		Vehicle[] garage = new Vehicle[5];
		//vehicles to array
		garage[0] = carOne;
		garage[1] = new Horse(10,"Bojack","Depressed");
		garage[2] = new Horse(3,"Clyde","Clydesdale");
		garage[3] = carTwo;
		garage[4] = new Horse(13,"Horsey McHorseface","Palamino");
		for (int i = 0; i < garage.length; i++) {
			garage[i].move();
		}
	}

}
