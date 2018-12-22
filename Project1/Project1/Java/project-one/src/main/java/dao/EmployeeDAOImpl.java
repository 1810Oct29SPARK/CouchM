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
	
//	private List<Employee> myEmployees = new ArrayList<Employee>();
//	
//	public EmployeeDAOImpl() {
//		myEmployees.add(new Employee(60, "Kro", "kro@ork.kom", "password", "Y", 51));
//		myEmployees.add(new Employee(61, "Rok", "rok@ork.kom", "password", "Y", 51));
//	}

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
	
	@Override
	public List<Employee> getEmployeesByBossId(int id) {
		List<Employee> em = new ArrayList<>();

		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "SELECT * FROM EMPLOYEE WHERE BOSS_ID = ?";
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
				em.add(new Employee(eId, eName, eMail, ePw, eBoss, eBossId));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return em;
	}

	
	@Override
	public void createEmployee(Employee e) {
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "INSERT INTO EMPLOYEE(E_NAME, E_MAIL, E_PW, E_BOSS, BOSS_ID) VALUES (?,?,?,?,?)";
			PreparedStatement p = con.prepareStatement(sql);
			p.setString(1, e.getName());
			p.setString(2, e.getEmail());
			p.setString(3, e.getPw());
			p.setString(4, e.getBoss());
			p.setInt(5, e.getBossId());
			p.executeUpdate();
		} catch (SQLException x) {
			x.printStackTrace();
		} catch (IOException x) {
			x.printStackTrace();
		}

	}

	
	@Override
	public void updateEmployee(Employee e) {
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "UPDATE EMPLOYEE SET E_NAME = ?, E_MAIL = ?, E_PW = ? WHERE E_ID = ?";
			PreparedStatement p = con.prepareStatement(sql);
			p.setString(1, e.getName());
			p.setString(2, e.getEmail());
			p.setString(3, e.getPw());
			p.setInt(4, e.getId());
			p.executeUpdate();
		} catch (SQLException x) {
			x.printStackTrace();
		} catch (IOException x) {
			x.printStackTrace();
		}
	}

	@Override
	public void deleteEmployee(Employee e) {
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "DELETE FROM EMPLOYEE WHERE E_ID = ?";
			PreparedStatement p = con.prepareStatement(sql);
			p.setInt(1, e.getId());
			p.executeUpdate();
		} catch (SQLException x) {
			x.printStackTrace();
		} catch (IOException x) {
			x.printStackTrace();
		}
	}

	@Override
	public Employee loginEmployee(String user, String pass) {
		Employee m = null;
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "SELECT * FROM EMPLOYEE WHERE E_NAME = ? AND E_PW = ?";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, user);
			pstmt.setString(2, pass);
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
}
