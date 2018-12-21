package servlets;

// Loading required libraries
import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class DatabaseAccess extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		// JDBC driver name and database URL
		final String JDBC_DRIVER = "main.Driver";
		final String DB_URL = "jdbc:oracle:thin:@dbcouch.csfzzce8zfuj.us-east-2.rds.amazonaws.com:1521:orcl";

		// Database credentials
		final String USER = "cax";
		final String PASS = "mouch";

		// Set response content type
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		String title = "Database Result";

		String docType = "<!doctype html public \"-//w3c//dtd html 4.0 " + "transitional//en\">\n";

		out.println(docType + "<html>\n" + "<head><title>" + title + "</title></head>\n"
				+ "<body bgcolor = \"#f0f0f0\">\n" + "<h1 align = \"center\">" + title + "</h1>\n");
		try {
			// Register JDBC driver
			Class.forName(JDBC_DRIVER);

			// Open a connection
			Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);

			// Execute SQL query
			Statement stmt = conn.createStatement();
			String sql;
			sql = "SELECT * FROM EMPLOYEE";
			ResultSet rs = stmt.executeQuery(sql);

			// Extract data from result set
			while (rs.next()) {
				// Retrieve by column name
				int eId = rs.getInt("E_ID");
				String eName = rs.getString("E_NAME");
				String eMail = rs.getString("E_MAIL");
				String ePw = rs.getString("E_PW");

				// Display values
				out.println("ID: " + eId + "<br>");
				out.println("Name: " + eName + "<br>");
				out.println("Email: " + eMail + "<br>");
				out.println("Password: " + ePw + "<br>");
			}
			out.println("</body></html>");

			// Clean-up environment
			rs.close();
			stmt.close();
			conn.close();
		} catch (SQLException se) {
			// Handle errors for JDBC
			se.printStackTrace();
		} catch (Exception e) {
			// Handle errors for Class.forName
			e.printStackTrace();
		} finally {
			// finally block used to close resources
//         try {
//            if(stmt!=null)
//               stmt.close();
//         } catch(SQLException se2) {
//         } // nothing we can do
//         try {
//            if(conn!=null)
//            conn.close();
//         } catch(SQLException se) {
//            se.printStackTrace();
//         } //end finally try
		} // end try
	}
}
