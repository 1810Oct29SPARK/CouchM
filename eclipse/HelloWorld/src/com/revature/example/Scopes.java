package com.revature.example;

public class Scopes {

	//static variable
	//in the class or "static" scope
	//variable is defined for entire class
	//should reference it using Scopes.variable1
	
	public static String variable1 = "v1";
	
	/*
	 * this is a variable that all instances will have
	 * in the instance scope
	 * not defined outside of an object of type Scope
	 * if NOT static: instance variable
	 * if IS static: class variable
	 */
	public String variable2;
	
	/*
	 * write a constructor with an argument of variable2
	 * the constructor arg has LOCAL or METHOD scope
	 * constructor arg is SHADOWING (same indentifier, different scope)
	 * the instance variable of the same name
	 * innermost scope always wins out
	 * 
	 * "this" prepended to the variable name allows us to reference the instance
	 * variable instead of the locally-scoped variable
	 */
	public Scopes(String variable2) {
		this.variable2 = variable2;
	}
	
	public static void main(String[] args) {
		
		System.out.println(Scopes.variable1); //variable1 is defined
		Scopes s = new Scopes("v2"); //make an instance of v2
		System.out.println(s.variable2); //variable2 is defined for an INSTANCE of the class
		//variable2 would not work on its own as you cannot reference an instance 
		//variable inside a static method
		s.myMethod("This is an argument to myMethod");
		//cannot reference a non-static member from a static member
		//can be done reverse, but must be prepended with name of class
		
	}
	
	//variable3 is declared within a method,
	//therefore, it is NOT accessible outside of that method.
	public void myMethod(String variable3) {
		System.out.println(variable3); //fine if inside the method
		//fun with block scope
		for (int i=0; i<10; i++) {
			System.out.println("value of i is " + i);
		}
		//System.out.println("value of i is " + i); would not work, because "i" is
		//only defined for the for loop (block scope)
		if (variable3.equals("v3")) {
			System.out.println(variable3);
			int j = 17; //j is only defined within this if-block
		} else {
			//j is not defined here! ONLY within the if-block
		}
	}

}
