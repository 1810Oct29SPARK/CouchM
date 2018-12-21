package servlets;

import beans.Accounts;
import service.AccountsService;
import service.AccountsServiceImpl;
import service.EmployeeService;
import service.EmployeeServiceImpl;

public class ServletDriver {

	public static void main(String[] args) {
		
		EmployeeService es = new EmployeeServiceImpl();
		AccountsService as = new AccountsServiceImpl();
		Accounts a = new Accounts(0, 0, 0, null, null, null);
		
//		es.createEmployee("Orka", "orka@ork.kom", "password", "N", 51);
//		System.out.println(es.getEmployeeById(51));
//		System.out.println(as.getAccountsById(10));
//		System.out.println(as.viewPendingById(10));
//		System.out.println(as.viewResolvedById(2));
//		System.out.println(as.viewEmployeePendingByBossId(10));
		as.createRequest(a);
		
	}

}
