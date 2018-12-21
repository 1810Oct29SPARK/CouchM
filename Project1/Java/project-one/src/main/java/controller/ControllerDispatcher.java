package controller;

public class ControllerDispatcher {

	final String authenticPassword = "123456";
	final String user1 = "student";
	final String user2 = "mom";

	public boolean isAuthenticUser(String password) {
		if (password.equals(this.authenticPassword)) {
			return true;
		} else {
			return false;
		}
	}

	public String dispatch(String username, String password) {
		
//		if (username == null || username.isEmpty() || password == null || password.isEmpty()) {
//			return null;
//		}
//		
//		if (isAuthenticUser(password)) {
//			if (username.equals(user1)) {
//				return new String("student");
//			} else if (username.equals(user2)) {
//				return new String("home");
//			}
//
//		}
//
//		return null;
		
		if (username != null && password != null && !username.isEmpty() && !password.isEmpty()) {
			
			if (this.isAuthenticUser(password)) {
				if (username.equals(this.user1)) {
					return new String("student.html");
				}
				else if (username.equals(this.user2)) {
					return new String("home.html");
				}
			}
			
		}
		
		return new String("FCDemoLogin.html");

	}
}