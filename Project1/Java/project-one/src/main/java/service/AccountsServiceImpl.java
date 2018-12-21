package service;

import java.sql.Blob;
import java.util.List;

import beans.Accounts;
import dao.AccountsDAO;
import dao.AccountsDAOImpl;

public class AccountsServiceImpl implements AccountsService {
	
	private AccountsDAO ad = new AccountsDAOImpl();

	@Override
	public void createRequest(Accounts a) {
		ad.createRequest(a);
		
	}

	@Override
	public void deleteRequest(Accounts a) {
		ad.deleteRequest(a);
		
	}

	@Override
	public List<Accounts> getAccountsById(int id) {
		return ad.getAccountsById(id);
	}

	@Override
	public void updateRequest(Accounts a) {
		ad.updateRequest(a);
	}

	@Override
	public List<Accounts> viewPendingById(int id) {
		return ad.viewPendingById(id);
	}

	@Override
	public List<Accounts> viewResolvedById(int id) {
		return ad.viewResolvedById(id);
	}

	@Override
	public List<Accounts> viewEmployeePendingByBossId(int id) {
		return ad.viewEmployeePendingByBossId(id);
	}

	@Override
	public List<Accounts> viewResolvedByBossId(int id) {
		return ad.viewResolvedByBossId(id);
	}

	@Override
	public void uploadPhoto(int aId) {
		ad.uploadPhoto(aId);
	}

}
