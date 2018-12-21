package servlets;

import service.EmployeeServiceImpl;

public class ServletDriver {

	public static void main(String[] args) {
		
		EmployeeServiceImpl es = new EmployeeServiceImpl();
		
//		es.createEmployee("Orka", "orka@ork.kom", "password", "N", 51);
		
		
		
		System.out.println(es.getEmployeeById(51));

	}

}
