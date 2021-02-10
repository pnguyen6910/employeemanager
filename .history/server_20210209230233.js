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
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "Enter the department you want to add."
        }).then(function(answer) {
            connection.query('', function(err, res) {
        
            })
        })
}

function addRole() {
    inquirer
        .prompt([
            {
            name: "role",
            type: "input",
            message: "Enter the role you want to add."
            },
            {
            name: "salary",
            type: "input",
            message: "How much is the salary?"
            }
    ]).then(function(answer) {
            connection.query('', function(err, res) {
        
            })
        })
}

function addEmployee() {
    inquirer
        .prompt([
            {
            name: "firstName",
            type: "input",
            message: "What is the employee's first name?"
            },
            {
            name: "lastName",
            type: "input",
            message: "What is the employee's last name?"
            }
        ]).then(function(firstname, lastName) {
            connection.query('INSERT INTO `employees`.`employee` (`first_name`, `last_name`) VALUES (<{first_name: }>, <{last_name: }>);', function(err, res) {
        
            })
        })
}

function addDepartment() {
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "Enter the department you want to add."
        }).then(function(answer) {
            connection.query('', function(err, res) {
        
            })
        })
}

function viewDepartments () {
    connection.query('SELECT `department`.`name` FROM `employees`.`department`;', function(err, res) {
        if (err) throw err
        console.table(res)
    })
}

function viewRoles() {
    connection.query("SELECT `role`.`title` FROM `employees`.`role`", function(err, res) {
        if (err) throw err
        console.table(res)
    })
}

function viewEmployees() {
    connection.query('SELECT `employee`.`first_name`, `employee`.`last_name` FROM `employees`.`employee`;', function(err, res) {
        if (err) throw err
        console.table(res)
    })
}

runManager()