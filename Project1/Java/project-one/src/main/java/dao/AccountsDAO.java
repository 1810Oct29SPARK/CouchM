package dao;

import java.sql.Blob;
import java.util.List;

import beans.Accounts;

public interface AccountsDAO {
	
	public void createRequest(int amount, int eId, Blob photo, String descrip);
	
	public void deleteRequest(int eId);
	
	public List<Accounts> getAccounts();
	
	public void updateRequest(int aId, String status);

}
