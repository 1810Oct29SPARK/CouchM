/**
 * 
 */
let employee = {};

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

window.onload = function(){
	populateUser();
	viewPending();
	viewResolved();
	viewPendingByBoss();
	viewResolvedByBoss();
	viewEmployees();
	viewRequestsById();
}

function populateUser(){
	// send a GET request to localhost:7001/project-one/session
	fetch("http://localhost:7001/project-one/session")
	.then(function(response){
		return response.json();
	}).then(function(data){
		console.log(data);
		// check whether there is a valid user returned
		// define behavior for no user returned
		if (data.session === null){
			window.location = "http://localhost:7001/project-one/login";
		} else {
			// define behavior for user returned
			employee = data;
			document.getElementById("userId").innerText = "User ID: " + employee.id;
			document.getElementById("username").innerText = "Name: " + employee.name;
			document.getElementById("email").innerText = "Email: " + employee.email;
			document.getElementById("password").innerText = "Password: " + employee.pw;
// document.getElementById("manager").innerText = "Manager?: " +
// employee.manager;
// document.getElementById("boss").innerText = "Boss ID: " + employee.boss;
		}
	});
	
}

function viewPending(){
	const ul = document.getElementById('pending');
	const url = 'http://localhost:7001/project-one/accountsPending?id=2';
	fetch(url)
	.then(function(response){
		return response.json();
	}).then(function(data){
		let accounts = data;
		return accounts.map(function(account) {
			let li = createNode('li'),
//				img = createNode('img'),
				span = createNode('span');
//			img.src = employee.picture.medium;
			span.innerHTML = `Account ID: ${account.accID}, Amount: ${account.amount}, Description: ${account.descrip}`;
//			append(li, img);
			append(li, span);
			append(ul, li);
		})
	})
	.catch(function(error) {
		console.log(JSON.stringify(error));
	});  
}

function viewResolved(){
	const ul = document.getElementById('resolved');
	const url = 'http://localhost:7001/project-one/accountsResolved?id=2';
	fetch(url)
	.then(function(response){
		return response.json();
	}).then(function(data){
		let accounts = data;
		return accounts.map(function(account) {
			let li = createNode('li'),
//				img = createNode('img'),
				span = createNode('span');
//			img.src = employee.picture.medium;
			span.innerHTML = `Account ID: ${account.accID}, Amount: ${account.amount}, Description: ${account.descrip}, Status: ${account.status}`;
//			append(li, img);
			append(li, span);
			append(ul, li);
		})
	})
	.catch(function(error) {
		console.log(JSON.stringify(error));
	});  
}

function viewEmployees(){
	const ul = document.getElementById('employees');
	const url = 'http://localhost:7001/project-one/employees';
	fetch(url)
	.then(function(response){
		return response.json();
	}).then(function(data){
		let employees = data;
		return employees.map(function(employee) {
			let li = createNode('li'),
//				img = createNode('img'),
				span = createNode('span');
//			img.src = employee.picture.medium;
			span.innerHTML = `Employee ID: ${employee.id}, Name: ${employee.name}, Email: ${employee.email}, Boss ID: ${employee.bossId}`;
//			append(li, img);
			append(li, span);
			append(ul, li);
		})
	})
	.catch(function(error) {
		console.log(JSON.stringify(error));
	});  
}

function viewPendingByBoss(){
	const ul = document.getElementById('pendingEmployees');
	const url = 'http://localhost:7001/project-one/pendingByBossId?id=51';
	fetch(url)
	.then(function(response){
		return response.json();
	}).then(function(data){
		let accounts = data;
		return accounts.map(function(account) {
			let li = createNode('li'),
//				img = createNode('img'),
				span = createNode('span');
//			img.src = employee.picture.medium;
			span.innerHTML = `Amount: ${account.amount}, Employee ID: ${account.eId}, Description: ${account.descrip}`;
//			append(li, img);
			append(li, span);
			append(ul, li);
		})
	})
	.catch(function(error) {
		console.log(JSON.stringify(error));
	});  
}

function viewResolvedByBoss(){
	const ul = document.getElementById('resolvedEmployees');
	const url = 'http://localhost:7001/project-one/resolvedByBossId?id=10';
	fetch(url)
	.then(function(response){
		return response.json();
	}).then(function(data){
		let accounts = data;
		return accounts.map(function(account) {
			let li = createNode('li'),
//				img = createNode('img'),
				span = createNode('span');
//			img.src = employee.picture.medium;
			span.innerHTML = `Amount: ${account.amount}, Employee ID: ${account.eId}, Description: ${account.descrip}, Status: ${account.status}`;
//			append(li, img);
			append(li, span);
			append(ul, li);
		})
	})
	.catch(function(error) {
		console.log(JSON.stringify(error));
	});  
}

function viewRequestsById(){
	const ul = document.getElementById('employeeRequests');
	const url = 'http://localhost:7001/project-one/accounts?id=50';
	fetch(url)
	.then(function(response){
		return response.json();
	}).then(function(data){
		let accounts = data;
		return accounts.map(function(account) {
			let li = createNode('li'),
//				img = createNode('img'),
				span = createNode('span');
//			img.src = employee.picture.medium;
			span.innerHTML = `Amount: ${account.amount}, Employee ID: ${account.eId}, Description: ${account.descrip}, Status: ${account.status}`;
//			append(li, img);
			append(li, span);
			append(ul, li);
		})
	})
	.catch(function(error) {
		console.log(JSON.stringify(error));
	});  
}