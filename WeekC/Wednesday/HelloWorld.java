public class HelloWorld {

	public static void main(String[] args) {
		System.out.println("Hello World!");
	}

}

//Pillars of OOP:
	// Encapsulation
		// Concealing the internal state of an object
		// Require interaction w/ internal state to occur through methods
			// Private instance variables with getter and setter methods (aka accessor and mutator methods)
			
	// Inheritance
		// Sharing of common states and behaviors between subclasses and superclasses
			// (Class)				(Properties)
			// Object					
			// |
			// |
			// Machine					turnON(), turnOff(), everything in Object
			// |
			// |
			// Vehicle					move(), stop(), and everything in Machine (includes everything in Object)
			// |		\
			// |		 \
			// Car		  Jetski		honk(), steer(), and everything in Vehicle (includes everything in Machine)
			
		// "extends" keyword will describe direct subclass of a superclass ("Vehicle extends Machine")
		// subclass === subtype === childclass
		// superclass === supertype === parentclass
			// every class can have many children, but only ONE parent
			// CANNOT have multiple inheritance
			// DIAMOND OF DEATH
								// Vehicle
								// /	  \
							   // /	 	   \
							  // / 	  		\
						  // Jetski	  		Car
							  // \		   /
							   // \	  	  /
							    // \	 /
								 // JetCar
								 
				// In the above example, JetCar would inherit properties from both Jetski and Car 
				// This means that its parentclasses could each have the same kind of property (ref. steer() above)
				// Which would it inherit? Java has no way to distinguish, and would implode
		
	// Polymorphism
		// Refer to a program element in multiple ways
			// For methods: can be "overriden" in subclass (access same function with different conditions)
						// can also be "overloaded" (several different versions of the same function)
			// For datatypes: a class can be treated as any of its supertypes
				// multiple "is a" relationship (A Car "is a" Vehicle. A Vehicle "is a" Machine.)
		
	// Abstraction
		// Concealing implementatin details and exposing only the necessary funstionality
			// WHAT the object does, NOT HOW it does it
			
	// Package
		// Namespace --> something we use to organize data (A Directory into a logical group)
			// Contains related Java files
			
	// Access Modifiers 
		// How we conrol access to program elements
			// Public, Protected, Private, and (Default)
			
		// Public
			// Any class in any package can access
			
		// Protected
			// Only accessible cia inheritance (methods and variables)
				// or within same package
				
		// Private
			// Only within same class
			
		// (Default)
			// Anything in that same package
			
	// Things to consider:
		// Child classes may be equally or less restrictive than parent classes
		// ONE public class per .java file
		// A .java file MUST be named the exact same thing as the public class inside of it
		// Package structure is not the same as the inheritance tree