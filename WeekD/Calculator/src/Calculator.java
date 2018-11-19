import java.util.*;

public class Calculator {

	public static void main(String[] args) {
		int num1 = 0;
		int num2 = 0;
		char operator;
		double answer = 0.0;

		Scanner scanObject = new Scanner(System.in);

		System.out.println("Please enter the first number: ");
		num1 = scanObject.nextInt();
		System.out.println("Please enter the second number: ");
		num2 = scanObject.nextInt();
		System.out.println("What operation? ");
		operator = scanObject.next().charAt(0);

		switch (operator) {
			case '+': answer = num1 + num2;
				break;
			case '-': answer = num1 - num2;
				break;
			case '*': answer = num1 * num2;
				break;
			case '/': answer = num1 / num2;
				break;
			case '^': answer = num1;

				for (int x = 2; x <= num2; x++) {
					answer *= num1;
				}
				break;
		}

		System.out.println(num1+" "+operator+" "+num2+" = "+answer);

	}
}
