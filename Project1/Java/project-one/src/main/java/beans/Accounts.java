package beans;

public class Accounts {

	private int accId;
	private short accNum;
	private double balance;

	@Override
	public String toString() {
		return "Accounts [accId=" + accId + ", accNum=" + accNum + ", balance=" + balance + "]";
	}

	public int getAccId() {
		return accId;
	}

	public void setAccId(int accId) {
		this.accId = accId;
	}

	public int getAccNum() {
		return accNum;
	}

	public void setAccNum(short accNum) {
		this.accNum = accNum;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public Accounts(int accId, short accNum, double balance) {
		super();
		this.accId = accId;
		this.accNum = accNum;
		this.balance = balance;
	}


}
