public class GameManager {

	public static void main(String[] args){
		Orc roc = new Orc("Roc",20,5);
		System.out.println(roc);
		roc.setName("Rick");
		roc.setHealth(15);
		roc.setAttack(3);
		System.out.println(roc.getName());
		System.out.println(roc.getHealth());
		System.out.println(roc.getAttack());
	}
}
