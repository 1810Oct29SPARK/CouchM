package service;

import beans.Credentials;
import beans.Employee;

public class AuthenticationService {

	public AuthenticationService() {
	}
	
	public Employee isValidUser(Credentials credentials) {
		Employee e = null;
		String username = credentials.getUsername();
		String password = credentials.getPassword();
		//this is Authentication (does user exist in system?)
		//now Authorization (what can the user access within the system?) (user roles)
		//take credentials and return the Employee to which they belong if it exists
		if (username != null && password != null) {
			//for now... this is fake
//			if (username.equals("Zug") && password.equals("p4ssw0rd")) {
//				e = new Employee(1, "Zug", "zug@ork.kom", "p4ssw0rd", "N", 10);
//			}
		}
		return e;
	}

}
