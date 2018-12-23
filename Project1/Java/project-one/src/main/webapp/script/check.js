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
	viewEmployees();
//	viewPending();
//	viewResolved();
//	viewPendingByBoss();
//	viewResolvedByBoss();
//	viewRequestsById();
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
let pSubmit = document.getElementById('pendingButton');

pSubmit.addEventListener("click", function() {
    let input = document.getElementById('pendingInput');
    let searchInput = input.value;
	const ul = document.getElementById('pending');
	const url = 'http://localhost:7001/project-one/accountsPending?id=';
	fetch(url + searchInput)
	.then(function(response){
		return response.json();
	}).then(function(data){
		let accounts = data;
		return accounts.map(function(account) {
			let li = createNode('li'),
// img = createNode('img'),
				span = createNode('span');
// img.src = employee.picture.medium;
			span.innerHTML = `<div class="card">
								<div class="card-body">
									Account ID: ${account.accId}, Amount: ${account.amount}, Description: ${account.descrip}
								</div>
							</div>`;
// append(li, img);
			append(li, span);
			append(ul, li);
		})
	})
	.catch(function(error) {
		console.log(JSON.stringify(error));
	})
});

let rSubmit = document.getElementById('resolvedButton');

rSubmit.addEventListener("click", function() {
    let input = document.getElementById('resolvedInput');
    let searchInput = input.value;
	const ul = document.getElementById('resolved');
	const url = 'http://localhost:7001/project-one/accountsResolved?id=';
	fetch(url + searchInput)
	.then(function(response){
		return response.json();
	}).then(function(data){
		let accounts = data;
		return accounts.map(function(account) {
			let li = createNode('li'),
// img = createNode('img'),
				span = createNode('span');
// img.src = employee.picture.medium;
			span.innerHTML = `<div class="card">
								<div class="card-body">
									Account ID: ${account.accId}, Amount: ${account.amount}, Description: ${account.descrip}, Status: ${account.status}
								</div>
							</div>`;
// append(li, img);
			append(li, span);
			append(ul, li);
		})
	})
	.catch(function(error) {
		console.log(JSON.stringify(error));
	})
});

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
// img = createNode('img'),
				span = createNode('span');
// img.src = employee.picture.medium;
			span.innerHTML = `<div class="card">
								<div class="card-body">
									Employee ID: ${employee.id}, Name: ${employee.name}, Email: ${employee.email}, Boss ID: ${employee.bossId}
								</div>
							</div>`;
// append(li, img);
			append(li, span);
			append(ul, li);
		})
	})
	.catch(function(error) {
		console.log(JSON.stringify(error));
	});  
}

let epSubmit = document.getElementById('epButton');

epSubmit.addEventListener("click", function() {
    let input = document.getElementById('epInput');
    let searchInput = input.value;
	const ul = document.getElementById('pendingEmployees');
	const url = 'http://localhost:7001/project-one/pendingByBossId?id=';
	fetch(url + searchInput)
	.then(function(response){
		return response.json();
	}).then(function(data){
		let accounts = data;
		return accounts.map(function(account) {
			let li = createNode('li'),
// img = createNode('img'),
				span = createNode('span');
// img.src = employee.picture.medium;
			span.innerHTML = `<div class="card">
								<div class="card-body">
									Amount: ${account.amount}, Employee ID: ${account.eId}, Description: ${account.descrip}
									<span class="btn-group" role="group" aria-label="Basic example">
										<button type="button" class="btn btn-secondary" id="approve">Approve</button>
										<button type="button" class="btn btn-secondary" id="deny">Deny</button>
									</span>
								</div>
							</div>`;
// append(li, img);
			append(li, span);
			append(ul, li);
		})
	})
	.catch(function(error) {
		console.log(JSON.stringify(error));
	});  
});

let erSubmit = document.getElementById('erButton');

erSubmit.addEventListener("click", function() {
    let input = document.getElementById('erInput');
    let searchInput = input.value;
	const ul = document.getElementById('resolvedEmployees');
	const url = 'http://localhost:7001/project-one/resolvedByBossId?id=';
	fetch(url + searchInput)
	.then(function(response){
		return response.json();
	}).then(function(data){
		let accounts = data;
		return accounts.map(function(account) {
			let li = createNode('li'),
// img = createNode('img'),
				span = createNode('span');
// img.src = employee.picture.medium;
			span.innerHTML = `<div class="card">
								<div class="card-body">
									Amount: ${account.amount}, Employee ID: ${account.eId}, Description: ${account.descrip}, Status: ${account.status}
								</div>
							</div>`;
// append(li, img);
			append(li, span);
			append(ul, li);
		})
	})
	.catch(function(error) {
		console.log(JSON.stringify(error));
	});  
});

let esSubmit = document.getElementById('esButton');

esSubmit.addEventListener("click", function() {
    let input = document.getElementById('esInput');
    let searchInput = input.value;
	const ul = document.getElementById('employeeRequests');
	const url = 'http://localhost:7001/project-one/accounts?id=';
	fetch(url + searchInput)
	.then(function(response){
		return response.json();
	}).then(function(data){
		let accounts = data;
		return accounts.map(function(account) {
			let li = createNode('li'),
// img = createNode('img'),
				span = createNode('span');
// img.src = employee.picture.medium;
			span.innerHTML = `<div class="card">
								<div class="card-body">
									Amount: ${account.amount}, Employee ID: ${account.eId}, Description: ${account.descrip}, Status: ${account.status}
								</div>
							</div>`;
// append(li, img);
			append(li, span);
			append(ul, li);
		})
	})
	.catch(function(error) {
		console.log(JSON.stringify(error));
	});  
});