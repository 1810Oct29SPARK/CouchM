package main;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;

import dao.EmployeeDAO;
import dao.EmployeeDAOImpl;
import util.ConnectionUtil;

public class Driver {

	public static void main(String[] args) {
//		init();
		
		EmployeeDAO ed = new EmployeeDAOImpl();
//		System.out.println(ed.getEmployeeById(1));
		System.out.println(ed.getEmployees());
//		System.out.println(ed.loginEmployee("zug@ork.kom", "p4ssw0rd"));
//		ed.createEmployee(2, "Lok", "lok@ork.kom", "password", "N", null, 100);
//		ed.deleteEmployee(2);
//		ed.updateEmployee(2, "Tar", "tar@ork.kom", "password");
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
