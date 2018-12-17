package beans;

public class Employee {

	private int id;
	private String name;
	private String email;
	private String pw;
	private String boss;
	private int bossId;

	public Employee(int id, String name, String email, String pw, String eBoss, int bossId) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.pw = pw;
		this.boss = eBoss;
		this.bossId = bossId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPw() {
		return pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}

	public String getBoss() {
		return boss;
	}

	public void setBoss(String boss) {
		this.boss = boss;
	}

	public int getBossId() {
		return bossId;
	}

	public void setBossId(int bossId) {
		this.bossId = bossId;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", email=" + email + ", pw=" + pw + ", boss=" + boss
				+ ", bossId=" + bossId + "]";
	}

}
