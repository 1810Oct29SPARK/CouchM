package dao;

import java.util.List;

import beans.Employee;

public interface EmployeeDAO {

	public Employee getEmployeeById(int id);

	public List<Employee> getEmployees();
	
	public List<Employee> getEmployeesByBossId(int id);

	public void createEmployee(Employee e);

	public void updateEmployee(Employee e);

	public void deleteEmployee(Employee e);

	public Employee loginEmployee(String user, String pass);

}
