package com.revature.transport;

/*
 * Abstract class cannot be instantiated
 * if there is ONE (or more) abstract method(s), THE CLASS MUST BE ABSTRACT
 * (note: opposite of "abstract" in Java is "concrete"[but there is no keyword for it])
 */

public abstract class Vehicle {
	
	/*
	 * I will have to implement this method in the first concrete subclass
	 * (the first thing that extends this class)
	 */
	public abstract void move();
	
}
