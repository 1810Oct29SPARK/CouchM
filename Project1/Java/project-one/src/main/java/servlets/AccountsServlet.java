package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import beans.Accounts;
import service.AccountsService;
import service.AccountsServiceImpl;

/**
 * Servlet implementation class AccountsServlet
 */
public class AccountsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private ObjectMapper om;
	private AccountsService accountsService;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AccountsServlet() {
		accountsService = new AccountsServiceImpl();
		om = new ObjectMapper();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
//		response.getWriter().write("ayyylmao");
//		response.getWriter().write(request.getRequestURI());
		switch (request.getRequestURI()) {
		case "/project-one/accounts":
//			response.getWriter().write("ayyylmao");
			int id = Integer.parseInt(request.getParameter("id"));
			response.getWriter().write(om.writeValueAsString(accountsService.getAccountsById(id)));
			break;
		case "/project-one/accountsPending":
//			response.getWriter().write("lmaoayyy");
			int pId = Integer.parseInt(request.getParameter("id"));
			response.getWriter().write(om.writeValueAsString(accountsService.viewPendingById(pId)));
			break;
		case "/project-one/accountsResolved":
//			response.getWriter().write("lmaoayyy");
			int rId = Integer.parseInt(request.getParameter("id"));
			response.getWriter().write(om.writeValueAsString(accountsService.viewResolvedById(rId)));
			break;
		case "/project-one/pendingByBossId":
//			response.getWriter().write("lmaoayyy");
			int bId = Integer.parseInt(request.getParameter("id"));
			response.getWriter().write(om.writeValueAsString(accountsService.viewEmployeePendingByBossId(bId)));
			break;
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		accountsService.createRequest(om.readValue(request.getReader(), Accounts.class));
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		accountsService.updateRequest(om.readValue(request.getReader(), Accounts.class));
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		accountsService.deleteRequest(om.readValue(request.getReader(), Accounts.class));
	}

}
