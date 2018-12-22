package service;

import java.sql.Blob;
import java.util.List;

import beans.Accounts;

public interface AccountsService {
	
	public void createRequest(Accounts a);

	public void deleteRequest(Accounts a);

	public List<Accounts> getAccountsById(int id);

	public void updateRequest(Accounts a);

	public List<Accounts> viewPendingById(int id);

	public List<Accounts> viewResolvedById(int id);

	public List<Accounts> viewEmployeePendingByBossId(int id);

	public List<Accounts> viewResolvedByBossId(int id);

	public void uploadPhoto(int aId);
	
}
