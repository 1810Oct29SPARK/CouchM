public class Horse extends Vehicle {

	public Horse(int age, String name, String breed){
		this.age = age;
		this.name = name;
		this.breed = breed;
	}

	private int age;
	private String name;
	private String breed;

	public void neigh(){
		System.out.println("Seabiscuit roars into the wind");
	}

	//getter and setter for age
	public int getAge(){
		return this.age;
	}

	public void setAge(int age){
		this.age = age;
	}

	//getter and setter for name
	public String getName(){
		return this.name;
	}

	public void setNAme(String name){
		this.name = name;
	}

	//getter and setter for breed
	public String getBreed(){
		return this.breed;
	}

	public void setBreed(String breed){
		this.breed = breed;
	}

	@Override
	public void move(){
		System.out.println(this.name + " gallops majestically through a field of lilacs");
	}

}
