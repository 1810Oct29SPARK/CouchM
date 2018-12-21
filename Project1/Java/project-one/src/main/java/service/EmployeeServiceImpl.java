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
	public void createEmployee(Employee e) {
		ed.createEmployee(e);
		
	}

	@Override
	public void updateEmployee(Employee e) {
		ed.updateEmployee(e);
	}

	@Override
	public void deleteEmployee(Employee e) {
		ed.deleteEmployee(e);
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
