package beans;

import java.sql.Blob;

public class Accounts {

	private int accId;
	private double amount;
	private int eId;
	private Blob photo;
	private String descrip;
	private String status;

	public int geteId() {
		return eId;
	}

	public void seteId(int eId) {
		this.eId = eId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Blob getPhoto() {
		return photo;
	}

	public void setPhoto(Blob photo) {
		this.photo = photo;
	}

	public String getDescrip() {
		return descrip;
	}

	public void setDescrip(String descrip) {
		this.descrip = descrip;
	}

	public int getAccId() {
		return accId;
	}

	public void setAccId(int accId) {
		this.accId = accId;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public Accounts(int accId, int eId, double amount, Blob photo, String descrip, String status) {
		super();
		this.accId = accId;
		this.eId = eId;
		this.amount = amount;
		this.photo = photo;
		this.descrip = descrip;
		this.status = status;
	}

	@Override
	public String toString() {
		return "Accounts [accId=" + accId + ", eId=" + eId + ", amount=" + amount + ", photo=" + photo + ", descrip="
				+ descrip + ", status=" + status + "]";
	}

	


}
