public class Rider {

	public static void main(String[] args){
		System.out.println("A cowboy approaches a mighty beast");

		Horse seabiscuit = new Horse(7, "Seabiscuit", "Thoroughbred");

		System.out.println("His name is " + seabiscuit.getName());
		System.out.println("He's " + seabiscuit.getAge() + "-years-old");
		System.out.println("He is a " + seabiscuit.getBreed() + " horse");
		seabiscuit.neigh();
		seabiscuit.move();
	}

}
