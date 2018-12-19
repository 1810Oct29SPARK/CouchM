package main;

import dao.AccountsDAO;
import dao.AccountsDAOImpl;
import dao.EmployeeDAO;
import dao.EmployeeDAOImpl;

public class Driver {

	public static void main(String[] args) {
//		init();
		
		EmployeeDAO ed = new EmployeeDAOImpl();
		AccountsDAO ad = new AccountsDAOImpl();
//		System.out.println(ed.getEmployeeById(1));
//		System.out.println(ed.getEmployees());
//		System.out.println(ed.loginEmployee("zug@ork.kom", "p4ssw0rd"));
//		ed.createEmployee(3, "Lok", "lok@ork.kom", "password", "N", 100);
//		ed.deleteEmployee(2); //HAS AN ACCOUNT ASSOCIATED WITH HIM
//		ed.updateEmployee(10, "Tim", "timmy@ork.kom", "pa55w0rd");
//		ed.createEmployee("Tim", "tim@ork.kom", "password", "N", 100);
//		ad.createRequest(120, 2, null, "hardware");
//		ad.createRequest(200, 3, null, "wwwaaaaaaggh");
//		ad.deleteRequest(10);
//		ad.deleteRequest(16);
//		ad.deleteRequest(15);
//		ad.updateRequest(19, "APPROVED");
//		ad.updateRequest(30, "DENIED");
//		System.out.println(ad.getAccountsById(2));
//		System.out.println(ad.viewPendingById(2));
//		System.out.println(ad.viewDeniedById(2));
//		System.out.println(ad.viewApprovedById(2));
//		System.out.println(ad.viewEmployeePendingByBossId(10));
		System.out.println(ad.viewResolvedByBossId(10));
	}

//	static void init() {
//		try {
//			Connection con = ConnectionUtil.getConnection("connection.properties");
//			System.out.println(con);
//		} catch (SQLException e) {
//			e.printStackTrace();
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//	}

}


//USER ROLE FOR WHICH SCREENS YOU SEE WHEN YOU LOG IN
//WHETHER THERE ARE MANAGERS WITHOUT PEOPLE TO MANAGE
//