const connection = require("./db/connection.js")
const inquirer = require("inquirer")

//adds departments roles & employees
//view departments roles & employees
// updates employee roles
//update employee managers
//view employees by manager
//delete departments roles and employees
//view the total utilized budget of a department -- the combined salaries of all employees

function runManager() {
    inquirer
        .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Add Department",
            "Add Role",
            "Add Employee",
            "View Departments",
            "View Roles",
            "View Employees",
            "EXIT"
        ]
        })
        .then(function(answer) {
        switch (answer.action) {
        case "Add Department":
            addDepartment();
        break;
  
        case "Add Role":
            addRole();
        break;
  
        case "Add Employee":
            addEmployee();
        break;
  
        case "View Departments":
            viewDepartments();
        break;

        case "View Roles":
            viewRoles();
        break;

        case "View Employees":
            viewEmployees();
        break;
  
        case "EXIT":
            connection.end();
        break;
        }
        });
  }

function addDepartment() {
    connection.query('', function(err, res) {

    })
}

function addRole() {
    connection.query('', function(err, res) {
        
    })
}

function addEmployee() {
    connection.query('', function(err, res) {
        
    })
}

function addDepartment() {
    connection.query('', function(err, res) {
        
    })
}

function viewDepartments () {
    connection.query('', function(err, res) {
        console.table(res)
    })
}

function viewRoles() {
    connection.query('SELECT `role`.`title` FROM `emloyees`.`role`', function(err, res) {
        console.table(res)
    })
}

function viewEmployees() {
    connection.query('', function(err, res) {
        console.table(res)
    })
}

runManager()