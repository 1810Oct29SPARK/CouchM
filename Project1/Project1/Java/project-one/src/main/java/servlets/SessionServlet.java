package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.databind.ObjectMapper;

import beans.Employee;

@WebServlet("/session")
public class SessionServlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// grab current session, if it exists
		response.setContentType("application/json");
		HttpSession session = request.getSession(false);
		if (session != null && session.getAttribute("username") != null) {
			try {
				int userId = Integer.parseInt(session.getAttribute("userId").toString());
				String username = session.getAttribute("username").toString();
				String email = session.getAttribute("email").toString();
				String password = session.getAttribute("password").toString();
				String manager = session.getAttribute("manager").toString();
				int boss = Integer.parseInt(session.getAttribute("boss").toString());
				Employee e = new Employee(userId, username, email, password, manager, boss);
				response.getWriter().write((new ObjectMapper()).writeValueAsString(e));
			} catch (Exception e) {
				response.getWriter().write("{\"session\":null}");
			}
		} else {
			response.getWriter().write("{\"session\":null}");
		}
	}

}
