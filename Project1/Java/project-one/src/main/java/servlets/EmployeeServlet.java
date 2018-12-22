package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import beans.Employee;
import service.EmployeeService;
import service.EmployeeServiceImpl;

/**
 * Servlet implementation class EmployeeServlet
 */
public class EmployeeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private ObjectMapper om;
	private EmployeeService employeeService;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public EmployeeServlet() {
		employeeService = new EmployeeServiceImpl();
		om = new ObjectMapper();
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// check whether the URI was "bear" or "bears"
		// note: if we had more than 2 choices, we should A B S O L U T E L Y use a
		// front controller pattern or some sort of helper class
//		response.getWriter().write("ayyylmao");
//		response.getWriter().write(request.getRequestURI());
		switch (request.getRequestURI()) {
		case "/project-one/employee":
//			response.getWriter().write("ayyylmao");
			int id = Integer.parseInt(request.getParameter("id"));
			response.getWriter().write(om.writeValueAsString(employeeService.getEmployeeById(id)));
			break;
		case "/project-one/employees":
//			response.getWriter().write("lmaoayyy");
			response.getWriter().write(om.writeValueAsString(employeeService.getEmployees()));
			break;
		case "/project-one/employeesByBoss":
//			response.getWriter().write("lmaoayyy");
			int bId = Integer.parseInt(request.getParameter("id"));
			response.getWriter().write(om.writeValueAsString(employeeService.getEmployeesByBossId(bId)));
			break;
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
//		System.out.println(om.readValue(request.getReader(), Employee.class));
		employeeService.createEmployee(om.readValue(request.getReader(), Employee.class));
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		employeeService.updateEmployee(om.readValue(request.getReader(), Employee.class));
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		employeeService.deleteEmployee(om.readValue(request.getReader(), Employee.class));
	}

}
