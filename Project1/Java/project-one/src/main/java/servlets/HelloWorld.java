package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloWorld extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3431382996657409456L;
	

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw= resp.getWriter();
		pw.write("Hello World");
		//access Servlet Config - params unique to this servlet
		pw.println(getServletConfig().getInitParameter("servletMessage"));
		//access Servlet Context - params shared by all servlets
		pw.println(getServletConfig().getServletContext().getInitParameter("applicationMessage"));
	}

}
