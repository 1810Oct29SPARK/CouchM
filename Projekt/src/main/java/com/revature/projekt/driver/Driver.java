package com.revature.projekt.driver;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;

import com.revature.projekt.util.ConnectionUtil;

public class Driver {
	
	public static void main(String[] args) {
		
//		User alex = new User("Alex");
//		User bill = new User("Bill");
//		
//		System.out.println(alex);
//		System.out.println(bill);
		
		init();
	}
	
	static void init() {
		try {
			Connection con = ConnectionUtil.getConnection("connection.properties");
			System.out.println(con);
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
