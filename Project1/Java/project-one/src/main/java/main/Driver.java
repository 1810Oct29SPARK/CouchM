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
//		System.out.println(ed.loginEmployee("Thrall", "password"));
//		ed.createEmployee("Garrosh", "garrosh@ork.kom", "password", "N", 100);
//		ed.createEmployee("Thrall", "thrall@ork.kom", "password", "N", 100);
//		ed.createEmployee("Azog", "azog@ork.kom", "password", "N", 50);
//		ed.createEmployee("Boldog", "boldog@ork.kom", "password", "N", 50);
//		ed.createEmployee("Bolg", "bolg@ork.kom", "password", "N", 50);
//		ed.createEmployee("Gor", "gor@ork.kom", "password", "N", 50);
//		ed.deleteEmployee(2); //HAS AN ACCOUNT ASSOCIATED WITH HIM
//		ed.updateEmployee(10, "Rik", "rik@ork.kom", "pa55w0rd");
//		ad.createRequest(550, 51, null, "malware");
//		ad.createRequest(100, 51, null, "dry cleaning");
//		ad.createRequest(740, 52, null, "laptop repairs");
//		ad.createRequest(460, 53, null, "software");
//		ad.createRequest(210, 54, null, "lunch");
//		ad.deleteRequest(10);
//		ad.deleteRequest(16);
//		ad.deleteRequest(15);
//		ad.updateRequest(19, "APPROVED");
//		ad.updateRequest(30, "DENIED");
//		System.out.println(ad.getAccountsById(2));
//		System.out.println(ad.viewPendingById(2));
//		System.out.println(ad.viewResolvedById(2));
//		System.out.println(ad.viewEmployeePendingByBossId(10));
//		System.out.println(ad.viewResolvedByBossId(10));
//		ad.uploadPhoto(32);
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