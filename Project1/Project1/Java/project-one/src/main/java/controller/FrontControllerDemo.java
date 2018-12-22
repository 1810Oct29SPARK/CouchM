package controller;

public class FrontControllerDemo {

	public static void main(String[] args) {
		FrontController fc = new FrontController();
		fc.dispatchRequest("Home");
		fc.dispatchRequest("Student");
	}
	
}
