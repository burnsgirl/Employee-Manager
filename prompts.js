const inquirer = require('inquirer');
const mysql = require('mysql');
require("dotenv").config();
// conection is breaking it
// const connection = require('connection');
const util = require("util");
const DB = require("./db");


function start () {
    inquirer
        .prompt({
            name: 'list',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View all employees', 'View all employees by department', 'View all employees by manager', 'Add employee', 'Remove employee', 'Update employee role', 'Update employee manager', 'Exit'],
        })
        .then(function (response) {
            switch (response.menu) {
                case 'View all employees': allEmpl();
                    break;
                case 'View all employees by department': emplDept();
                    break;
                // case 'View all employees by manager': emplMan();
                //     break;
                case 'Add employee': addEmpl();
                    break;
                // case 'Remove employee': removeEmpl();
                //     break;
                case 'Update employee role': upEmplRole();
                    break;
                // case 'Update employee manager': upEmplMan();
                //     break;
                case 'Exit': exit();
                    break;
                    default:
                    exit();
            }
        });
};

function allEmpl() {
    inquirer
        .prompt ({
            name: 'employee',
            type: 'list',
            message: 'Choose an employee'
        })
        .then ((response) => {
            const query = 'SELECT employee FROM (table name)';
            connection.query(query, {emloyee: response.employee}, (err, res) => {
                if (err) throw err;
                res.forEach (({employee}) => {
                    console.log (employee);
                });
            });
        });
};

function emplDept() {
    inquirer
    .prompt ({
        name: 'department',
        type: 'list',
        message: 'Choose a department',
        choices: ['Cashier', 'Bagger', 'Door Holder']
    })
    .then ((response) => {
        const query = 'SELECT department FROM (table name)';
        connection.query(query, {department: response.department}, (err, res) => {
            if (err) throw err;
            res.forEach (({department}) => {
                console.log (department);
            });
        });
    });
};

// function emplMan() {

// };

function addEmpl() {
    inquirer
    .prompt ({
        name: 'fName',
        type: 'input',
        message: "What is the employee's first name?"
    }, {
        name: 'lName',
        type: 'input',
        message: "What is the employee's last name?"
    }), {
        name: 'role',
        type: 'input',
        message: "What is the employee's role?"
    }, {
        name: 'manager',
        type: 'input',
        message: "Who is the employee's manager?"
    }
    .then ((response) => {
        // LOOK into this one
        const query = 'INSERT INTO employee FROM (table name)';
        connection.query(query, {department: response.department}, (err, res) => {
            if (err) throw err;
            res.forEach (({department}) => {
                console.log (department);
            });
        });
    });
};

// function removeEmpl() {

// };

function upEmplRole() {
    inquirer
    .prompt ({
        name: 'title',
        type: 'input',
        message: "What is the employee's title?"
    }, {
        name: 'salary',
        type: 'input',
        message: "What is the employee's salary?"
    }), {
        name: 'department',
        type: 'input',
        message: "What department is the employee in?"
    }
    .then ((response) => {
        // LOOK into this one
        const query = 'INSERT INTO employee FROM (table name)';
        connection.query(query, {department: response.department}, (err, res) => {
            if (err) throw err;
            res.forEach (({department}) => {
                console.log (department);
            });
        });
    });
};

// function upEmplMan() {

// };

function exit() {
    return;
};

start();

