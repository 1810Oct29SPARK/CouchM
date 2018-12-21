package service;

import java.sql.Blob;
import java.util.List;

import beans.Accounts;

public interface AccountsService {
	
	public void createRequest(int amount, int eId, Blob photo, String descrip);

	public void deleteRequest(int eId);

	public List<Accounts> getAccountsById(int id);

	public void updateRequest(int aId, String status);

	public List<Accounts> viewPendingById(int id);

	public List<Accounts> viewResolvedById(int id);

	public List<Accounts> viewEmployeePendingByBossId(int id);

	public List<Accounts> viewResolvedByBossId(int id);

	public void uploadPhoto(int aId);
	
}
