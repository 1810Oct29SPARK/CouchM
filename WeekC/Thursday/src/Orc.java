public class Orc{

	public Orc(String name, int health, int attack){
		this.name = name;
		this.health = health;
		this.attack = attack;
	}

	private String name;
	private int health;
	private int attack;

	public String getName(){
		return this.name;
	}
	public void setName(String name){
		this.name = name;
	}

	public int getHealth(){
		return this.health;
	}
	public void setHealth(int health){
		this.health = health;
	}

	public int getAttack(){
		return this.attack;
	}
	public void setAttack(int attack){
		this.attack = attack;
	}
}
