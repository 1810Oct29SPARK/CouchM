public class Boat extends Vehicle {

	public Boat(){
		super();//call the superclass constructor, implicitly added if not included
	}

	public Boat(String name, String color){
		this.name = name;
		this.color = color;
	}

	private String name;
	private String color;

	public String getName(){
		return this.name;
	}
	public void setName(String name){
		this.name = name;
	}

	public String getColor(){
		return this.color;
	}
	public void setColor(String color){
		this.color = color;
	}

}
