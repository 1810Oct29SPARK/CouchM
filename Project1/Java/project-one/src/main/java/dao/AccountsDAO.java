package dao;

import java.sql.Blob;
import java.util.List;

import beans.Accounts;

public interface AccountsDAO {
	
	public void createRequest(int amount, int eId, Blob photo, String descrip);
	
	public void deleteRequest(int eId);
	
	public List<Accounts> getAccountsById(int id);
	
	public void updateRequest(int aId, String status);
	
	public Accounts viewPendingById(int id);
	
	public Accounts viewDeniedById(int id);
	
	public Accounts viewApprovedById(int id);
	
	public List<Accounts> viewEmployeePendingByBossId(int id);

}
