package com.revature.vacation;

import com.revature.transport.*; //.* imports all classes in the package
//to get a specific class, use import package.classname
//if you import 2 packages with the same classname, you would have to distinguish
//between the separate classes with the fully qualified classname

//static imports within a class (ONE CLASS)
import static com.revature.transport.Car.*;
//or import static com.revature.transport.Car.recommendedMilesBetweenOilChanges
//grabs a single static variable within ONE CLASS


public class GoOnVacation {

	public static void main(String[] args) {
		
		System.out.println("Let's go to Miami");
		System.out.println("We need a car");
		//using fully qualified classname of Car from transport package (package.classname)
		//com.revature.transport.Car c = new com.revature.transport.Car();
		//or we could use imports... save us typing!
		Car c = new Car(2021,"Telsa","Spaceship",50.1);
//		c.setMake("Telsa");
//		c.setModel("Spaceship");
//		c.setYearManufactured(2021);
//		c.setMilesSinceOilChange(50.1);
		System.out.println(c); //we get .toString() from Object superclass
		System.out.println("Do we need to change the oil first?");
		
		System.out.println("Recommended miles between oil changes: " + Car.recommendedMilesBetweenOilChanges);
		if (c.getMilesSinceOilChange()>=Car.recommendedMilesBetweenOilChanges) {
			System.out.println("Stop, and change your oil!");
		} else {
			System.out.println("You good.");
		}
		System.out.println("Made it to Miami, let's go kayaking");
		Kayak k = new Kayak("red",4.2,2,2);
		//System.out.println(k.getColor());//inherited from superclass
		System.out.println(k);
		
		
	}

}
