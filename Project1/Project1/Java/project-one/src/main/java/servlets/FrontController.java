package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controller.ControllerDispatcher;

/**
 * Servlet implementation class FrontController
 */
public class FrontController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FrontController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.getRequestDispatcher("FCDemoLogin.html").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		ControllerDispatcher cd = new ControllerDispatcher();
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
//		String page = cd.dispatch(username, password);
//		if (page == null) {
//			request.getRequestDispatcher("FCDemoLogin.html").forward(request, response);
//		}
//		
//		if (page.equals("student")) {
//			request.getRequestDispatcher("student.html").forward(request, response);
//		}
//		else if (page.equals("home")) {
//			request.getRequestDispatcher("home.html").forward(request, response);
//		}
//		else {
//			request.getRequestDispatcher("FCDemoLogin.html").forward(request, response);
//		}
		
		request.getRequestDispatcher(cd.dispatch(username, password)).forward(request, response);
		
	}

}
