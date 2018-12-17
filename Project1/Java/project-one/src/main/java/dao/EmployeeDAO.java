package dao;

import java.util.List;

import beans.Employee;

public interface EmployeeDAO {

	public Employee getEmployeeById(int id);

	public List<Employee> getEmployees();

	public void createEmployee(String name, String email, String pw, String eBoss, int bossId);

	public void updateEmployee(int id, String name, String email, String pw);

	public void deleteEmployee(int id);

	public boolean loginEmployee(String user, String pass);

}
