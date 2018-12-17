package dao;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import beans.Employee;
import util.ConnectionUtil;

public class EmployeeDAOImpl implements EmployeeDAO {

	private static final String filename = "connection.properties";

	public Employee getEmployeeById(int id) {
		Employee m = null;

		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "SELECT * FROM EMPLOYEE WHERE E_ID = ?";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, id);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				int eId = rs.getInt("E_ID");
				String eName = rs.getString("E_NAME");
				String eMail = rs.getString("E_MAIL");
				String ePw = rs.getString("E_PW");
				String eBoss = rs.getString("E_BOSS");
				int eBossId = rs.getInt("BOSS_ID");
				m = new Employee(eId, eName, eMail, ePw, eBoss, eBossId);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return m;
	}

	@Override
	public List<Employee> getEmployees() {
		List<Employee> em = new ArrayList<>();

		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "SELECT * FROM EMPLOYEE";
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			while (rs.next()) {
				int eId = rs.getInt("E_ID");
				String eName = rs.getString("E_NAME");
				String eMail = rs.getString("E_MAIL");
				String ePw = rs.getString("E_PW");
				String eBoss = rs.getString("E_BOSS");
				int eBossId = rs.getInt("BOSS_ID");
				em.add(new Employee(eId, eName, eMail, ePw, eBoss, eBossId));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return em;
	}

	// Give ACCOUNTS E_ID instead of giving Employee an A_ID
	@Override
	public void createEmployee(String name, String email, String pw, String eBoss, int bossId) {
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "INSERT INTO EMPLOYEE(E_NAME, E_MAIL, E_PW, E_BOSS, BOSS_ID) VALUES (?,?,?,?,?)";
			PreparedStatement p = con.prepareStatement(sql);
			//p.setInt(1, id);
			p.setString(1, name);
			p.setString(2, email);
			p.setString(3, pw);
			p.setString(4, eBoss);
			p.setInt(5, bossId);
			p.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	/*
	 * Create an if statement that checks all parameters of an employee public void
	 * updateEmployee(int id, String name, etc...) String sql="..." if (name !=
	 * "E_NAME"){ sql = sql + "name=" + name } concatenate them together within the
	 * sql statement to change inside the db all glory to the omnissiah.
	 */
	@Override
	public void updateEmployee(int id, String name, String email, String pw) {
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "UPDATE EMPLOYEE SET E_NAME = ?, E_MAIL = ?, E_PW = ? WHERE E_ID = ?";
			PreparedStatement p = con.prepareStatement(sql);
			p.setString(1, name);
			p.setString(2, email);
			p.setString(3, pw);
			p.setInt(4, id);
			p.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void deleteEmployee(int id) {
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "DELETE FROM EMPLOYEE WHERE E_ID = ?";
			PreparedStatement p = con.prepareStatement(sql);
			p.setInt(1, id);
			p.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Override
	public boolean loginEmployee(String user, String pass) {
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "SELECT E_MAIL, E_PW FROM EMPLOYEE WHERE E_MAIL = ? AND E_PW = ?";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, user);
			pstmt.setString(2, pass);
			ResultSet rs = pstmt.executeQuery();
			if (rs.next()) {
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		return false;

	}
}
