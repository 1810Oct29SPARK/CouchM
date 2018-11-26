package com.revature.example;

public class ControlFlow {

	public static void main(String[] args) {
		
		//ifStatements(7.5, 7.6);
		//forLoops();
		//whileLoops();
		switchCases("Wednesday");
		
	}
	
	static void ifStatements(double a, double b) {
		//can place parameters within the method declaration to be able to plug-
		//in arguments when calling the method
		
		if (a > b) {
			System.out.println("a is greater than b");
		} else if (a == b) {
			System.out.println("a equals b");
		} else {
			System.out.println("a is less than b");
		}
		//need to have a true or false value within an if-statement
		//you can have as many else-if's you want!
		//the world is your oyster!
		//party on, Garth.
		
	}
	
	static void forLoops() {
		
		//simple for loop
		for (int i = 0; i < 10; i++) {
			System.out.println(i);
		}
		
		//does nothing for loop
//		for(;;) {
//			
//		}
		
		//break and continue statements
		//"break" = exits the structure
		//"continue" = goes to the next iteration
		//important for switch cases
		
		System.out.println("even numbers:");
		for (int j = 0;;j++) {
			if(j % 2 != 0) {
				continue;
				//if "j" is odd, it will skip to the next iteration
				//same exact effect as calling modulus 2 equals 0, and printing
				//the result
			}
			System.out.println(j);
			if (j == 20) {
				break;
			}
		}
		
	}
	
	static void whileLoops() {
		
		//this is infinite! using a break statement to make it finite
		int i = 0;
		while(true) {
			System.out.println(i);
			i+=1;
			if (i>150) {
				break;
			}
		}
		
		do {
			System.out.println("do block always runs before the condition is checked");
		} while(false);
		
	}
	
	static void switchCases(String dayOfWeek) {
		//switch statement allows us to execute different behavior based on an expression
		//can be byte, short, char, int primitive types
		//can also be Enum, String, and Wrapper class
		//Wrapper classes are a referece type representation of primitive classes
		//auto-boxing and auto-unboxing
		
		//String dayOfWeek = "Tuesday";
		switch(dayOfWeek) {
		case "Sunday":
			System.out.println("today is Sunday");
			break;
		case "Monday":
			System.out.println("today is Monday");
			break;
		case "Tuesday":
			System.out.println("today is Tuesday");
			break;
		case "Wednesday":
			System.out.println("today is Wednesday, my dudes");
			break;
		case "Thursday":
			System.out.println("today is Thursday");
			break;
		case "Friday":
			System.out.println("today is Friday");
			break;
		case "Saturday":
			System.out.println("today is Saturday");
			break;
		default:
			System.out.println("today is nothing");
		}
		
	}

}
