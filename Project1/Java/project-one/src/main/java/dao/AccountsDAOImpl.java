package dao;

import java.io.IOException;
import java.sql.Blob;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import beans.Accounts;
import beans.Employee;
import util.ConnectionUtil;

public class AccountsDAOImpl implements AccountsDAO {
	
	private static final String filename = "connection.properties";
	
	
	@Override
	public void createRequest(int amount, int eId, Blob photo, String descrip) {
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "INSERT INTO ACCOUNTS(AMOUNT, E_ID, PHOTO, DESCRIPTIONS) VALUES (?,?,?,?)";
			PreparedStatement p = con.prepareStatement(sql);
			p.setInt(1, amount);
			p.setInt(2, eId);
			p.setBlob(3, photo);
			p.setString(4, descrip);
			p.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}


	@Override
	public void deleteRequest(int aId) {
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "DELETE FROM ACCOUNTS WHERE A_ID = ?";
			PreparedStatement p = con.prepareStatement(sql);
			p.setInt(1, aId);
			p.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}


	@Override
	public List<Accounts> getAccounts() {
		List<Accounts> ac = new ArrayList<>();

		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "SELECT * FROM ACCOUNTS";
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
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
	public void updateRequest(int aId, String status) {
		try (Connection con = ConnectionUtil.getConnection(filename)) {
			String sql = "UPDATE ACCOUNTS SET STATUS = ? WHERE A_ID = ?";
			PreparedStatement p = con.prepareStatement(sql);
			p.setString(1, status);
			p.setInt(2, aId);
			p.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
