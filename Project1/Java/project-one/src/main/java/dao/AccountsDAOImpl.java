package dao;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Blob;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import beans.Accounts;
import util.ConnectionUtil;

public class AccountsDAOImpl implements AccountsDAO {

	private static final String filename = "connection.properties";

	@Override
	public void createRequest(Accounts a) {
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "INSERT INTO ACCOUNTS(AMOUNT, E_ID, DESCRIPTIONS) VALUES (?,?,?)";
			PreparedStatement p = con.prepareStatement(sql);
			p.setDouble(1, a.getAmount());
			p.setInt(2, a.geteId());
//			p.setBlob(3, a.getPhoto());
			p.setString(4, a.getDescrip());
			p.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	@Override
	public void deleteRequest(Accounts a) {
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "DELETE FROM ACCOUNTS WHERE A_ID = ?";
			PreparedStatement p = con.prepareStatement(sql);
			p.setInt(1, a.getAccId());
			p.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Override
	public List<Accounts> getAccountsById(int id) {
		List<Accounts> ac = new ArrayList<>();

		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "SELECT * FROM ACCOUNTS WHERE E_ID = ?";
			PreparedStatement p = con.prepareStatement(sql);
			p.setInt(1, id);
			ResultSet rs = p.executeQuery();
			while (rs.next()) {
				int aId = rs.getInt("A_ID");
				int eId = rs.getInt("E_ID");
				int amount = rs.getInt("AMOUNT");
				Blob photo = rs.getBlob("PHOTO");
				String descrip = rs.getString("DESCRIPTIONS");
				String status = rs.getString("STATUS");
				ac.add(new Accounts(aId, eId, amount, photo, descrip, status));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return ac;
	}

	@Override
	public void updateRequest(Accounts a) {
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "UPDATE ACCOUNTS SET STATUS = ? WHERE A_ID = ?";
			PreparedStatement p = con.prepareStatement(sql);
			p.setString(1, a.getStatus());
			p.setInt(2, a.getAccId());
			p.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Override
	public List<Accounts> viewPendingById(int id) {
		List<Accounts> ac = new ArrayList<>();
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "SELECT * FROM ACCOUNTS WHERE STATUS = 'PENDING' AND E_ID = ?";
			PreparedStatement p = con.prepareStatement(sql);
			p.setInt(1, id);
			ResultSet rs = p.executeQuery();
			while (rs.next()) {
				int aId = rs.getInt("A_ID");
				int eId = rs.getInt("E_ID");
				int amount = rs.getInt("AMOUNT");
				Blob photo = rs.getBlob("PHOTO");
				String descrip = rs.getString("DESCRIPTIONS");
				String status = rs.getString("STATUS");
				ac.add(new Accounts(aId, eId, amount, photo, descrip, status));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return ac;
	}

	@Override
	public List<Accounts> viewResolvedById(int id) {
		List<Accounts> ac = new ArrayList<>();
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "SELECT * FROM ACCOUNTS WHERE STATUS != 'PENDING' AND E_ID = ?";
			PreparedStatement p = con.prepareStatement(sql);
			p.setInt(1, id);
			ResultSet rs = p.executeQuery();
			while (rs.next()) {
				int aId = rs.getInt("A_ID");
				int eId = rs.getInt("E_ID");
				int amount = rs.getInt("AMOUNT");
				Blob photo = rs.getBlob("PHOTO");
				String descrip = rs.getString("DESCRIPTIONS");
				String status = rs.getString("STATUS");
				ac.add(new Accounts(aId, eId, amount, photo, descrip, status));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return ac;
	}

	@Override
	public List<Accounts> viewEmployeePendingByBossId(int id) {
		List<Accounts> ac = new ArrayList<>();
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "SELECT A.A_ID, A.E_ID, A.AMOUNT, A.PHOTO, A.DESCRIPTIONS, A.STATUS, E.E_ID, E.E_NAME, E.BOSS_ID "
					+ "FROM ACCOUNTS A " + "INNER JOIN EMPLOYEE E " + "ON A.E_ID = E.E_ID "
					+ "WHERE A.STATUS = 'PENDING' " + "AND E.BOSS_ID = ?";
			PreparedStatement p = con.prepareStatement(sql);
			p.setInt(1, id);
			ResultSet rs = p.executeQuery();
			while (rs.next()) {
				int aId = rs.getInt("A_ID");
				int eId = rs.getInt("E_ID");
				int amount = rs.getInt("AMOUNT");
				Blob photo = rs.getBlob("PHOTO");
				String descrip = rs.getString("DESCRIPTIONS");
				String status = rs.getString("STATUS");
				// int eeId = rs.getInt("E.E_ID");
				ac.add(new Accounts(aId, eId, amount, photo, descrip, status));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return ac;
	}

	@Override
	public List<Accounts> viewResolvedByBossId(int id) {
		List<Accounts> ac = new ArrayList<>();
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "SELECT A.A_ID, A.E_ID, A.AMOUNT, A.PHOTO, A.DESCRIPTIONS, A.STATUS, E.E_ID, E.E_NAME, E.BOSS_ID "
					+ "FROM ACCOUNTS A " + "INNER JOIN EMPLOYEE E " + "ON A.E_ID = E.E_ID "
					+ "WHERE A.STATUS != 'PENDING' " + "AND E.BOSS_ID = ?";
			PreparedStatement p = con.prepareStatement(sql);
			p.setInt(1, id);
			ResultSet rs = p.executeQuery();
			while (rs.next()) {
				int aId = rs.getInt("A_ID");
				int eId = rs.getInt("E_ID");
				int amount = rs.getInt("AMOUNT");
				Blob photo = rs.getBlob("PHOTO");
				String descrip = rs.getString("DESCRIPTIONS");
				String status = rs.getString("STATUS");
//				int bossId = rs.getInt("E.BOSS_ID");
				// int eeId = rs.getInt("E.E_ID");
				ac.add(new Accounts(aId, eId, amount, photo, descrip, status));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return ac;
	}

	@Override
	public void uploadPhoto(int aId) {
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "UPDATE ACCOUNTS SET PHOTO = ? WHERE A_ID = ?";
			PreparedStatement p = con.prepareStatement(sql);
			File blob = new File("C:\\Users\\maxco\\OneDrive\\Desktop\\Project1\\Receipts\\five.jpg");
			FileInputStream in = new FileInputStream(blob);
			p.setBinaryStream(1, in);
			p.setInt(2, aId);
			p.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
