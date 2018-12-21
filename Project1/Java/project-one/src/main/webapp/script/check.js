/**
 * 
 */
let employee = {};

window.onload = function(){
	populateUser();
}

function populateUser(){
	//send a GET request to localhost:7001/project-one/session
	fetch("http://localhost:7001/project-one/session")
	.then(function(response){
		return response.json();
	}).then(function(data){
		console.log(data);
		//check whether there is a valid user returned
		//define behavior for no user returned
		if (data.session === null){
			window.location = "http://localhost:7001/project-one/login";
		} else {
			//define behavior for user returned
			employee = data;
			document.getElementById("userId").innerText = "User ID: " + employee.Id;
			document.getElementById("username").innerText = "Name: " + employee.name;
			document.getElementById("email").innerText = "Email: " + employee.email;
			document.getElementById("password").innerText = "Password: " + employee.pw;
			document.getElementById("manager").innerText = "Manager?: " + employee.manager;
			document.getElementById("boss").innerText = "Boss ID: " + employee.boss;
		}
	});
	
}