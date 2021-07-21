// Links for different packages and pages
const inquirer = require('inquirer');
const mysql = require('mysql');
require("dotenv").config();
const connection = require('./connection');
const util = require("util");
const cTable = require("console.table");
const { executionAsyncResource } = require('async_hooks');
const { allowedNodeEnvironmentFlags } = require('process');


//Starting function for the program
function start () {
    inquirer
        .prompt({
            name: 'list',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View all employees', 'View all departments', 'View all roles', 'Add employee', 'Add department', 'Add role', 'Update employee role', 'Exit'],
        })
        //Responses for the prompts
        .then(function (response) {
            switch (response.list) {
                case 'View all employees': allEmpl();
                    break;
                case 'View all departments': allDept();
                    break;
                case 'View all roles': allRoles();
                    break;
                case 'Add employee': addEmpl();
                    break;
                case 'Add department': addDept();
                    break;
                case 'Add role': addRole();
                    break;
                case 'Remove employee': removeEmpl();
                    break;
                case 'Update employee role': upEmplRole();
                    break;
                case 'Exit': connection.end();
                    break;
                    default:
            
            }
        });
};

//Viewing all employees
const allEmpl = () => {
            connection.query('SELECT * FROM employee', (err, res) => {
                if (err) throw err;
                    console.table(res);
                    start();
                });
};

//Viewing all departments
const allDept = () => {
    connection.query('SELECT * FROM departments', (err, res) => {
        if (err) throw err;
            console.table(res);
            start();
        });
};

//Viewing all roles
const allRoles = () => {
    connection.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err;
            console.table(res);
            start();
        });
};

//Adding an employee
function addEmpl() {
    inquirer
    .prompt ([
            {
            name: 'first_name',
            type: 'input',
            message: "What is the employee's first name?"
        }, {
            name: 'last_name',
            type: 'input',
            message: "What is the employee's last name?"
        }, {
            name: 'role_id',
            type: 'input',
            message: "What is the employee's role ID?"
        }, {
            name: 'manager_id',
            type: 'input',
            message: "What is the employee's manager ID?"
        }
    ])
    .then ((answer) => {
    
        const query = 'INSERT INTO employee SET ?';
        connection.query(query, answer, (err, res) => {
            if (err) throw err;
            console.log(`${answer.first_name} was added to employee`) 
            start();
        });
    });
};

//Adding a department
function addDept() {
    inquirer
    .prompt (
            {
            name: 'department',
            type: 'input',
            message: "What department would you like to add?"
        })
    .then ((answer) => {
    
        const query = 'INSERT INTO departments SET ?';
        connection.query(query, answer, (err, res) => {
            if (err) throw err;
            console.log(`${answer.department} was added to departments`) 
            start();
        });
    });
};

//Adding a role
function addRole() {
    inquirer
    .prompt ([
            {
            name: 'title',
            type: 'input',
            message: "What is the new role title?"
            }, {
            name: 'salary',
            type: 'input',
            message: "What is the salary?"
            }, {
            name: 'dept_id',
            type: 'input',
            message: "What is the department ID?"
            }
    ])
    .then ((answer) => {
    
        const query = 'INSERT INTO roles SET ?';
        connection.query(query, answer, (err, res) => {
            if (err) throw err;
            console.log(`${answer.title} was added to roles`) 
            start();
        });
    });
};


// function removeEmpl() {
//     inquirer
//     .prompt ({
//             name: 'delete',
//             type: 'input',
//             message: "Which employee would you like to delete?",
//             choices: allEmpl()
//         })
//         .then ((answer) => {
//     const query = 'DELETE FROM employee WHERE ?';
//         connection.query(query, answer, (err, res) => {
//             if (err) throw err;
//             console.log(`${answer.first_name} was deleted from employee`) 
//             start();
//         });
//     });
// };

//Updating employee role
function upEmplRole() {
    inquirer
    .prompt ([{
        name: 'title',
        type: 'input',
        message: "What is the employee's title?"
    }, {
        name: 'salary',
        type: 'input',
        message: "What is the employee's salary?"
    }, {
        name: 'dept_id',
        type: 'input',
        message: "What is the department ID?"
    }])
    .then ((answer) => {
        const query = 'INSERT INTO roles SET ?';
        connection.query(query, answer, (err, res) => {
            if (err) throw err;
            console.log(`${answer.title} was added to role`)
            start();
            });
        });
};

//Restarting the program
start();

