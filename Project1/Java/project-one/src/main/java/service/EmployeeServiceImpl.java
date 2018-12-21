package service;

import java.util.List;

import beans.Employee;
import dao.EmployeeDAO;
import dao.EmployeeDAOImpl;

public class EmployeeServiceImpl implements EmployeeService {

	private EmployeeDAO ed = new EmployeeDAOImpl();
	
	@Override
	public Employee getEmployeeById(int id) {
		return ed.getEmployeeById(id);
	}

	@Override
	public List<Employee> getEmployees() {
		return ed.getEmployees();
	}

	@Override
	public void createEmployee(String name, String email, String pw, String eBoss, int bossId) {
		ed.createEmployee(name, email, pw, eBoss, bossId);
		
	}

	@Override
	public void updateEmployee(int id, String name, String email, String pw) {
		ed.updateEmployee(id, name, email, pw);
	}

	@Override
	public void deleteEmployee(int id) {
		ed.deleteEmployee(id);
	}

	@Override
	public Employee loginEmployee(String user, String pass) {
		return ed.loginEmployee(user, pass);
	}

	@Override
	public List<Employee> getEmployeesByBossId(int id) {
		return ed.getEmployeesByBossId(id);
	}

	
	
}
