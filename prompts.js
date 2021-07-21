const inquirer = require('inquirer');
const mysql = require('mysql');
require("dotenv").config();
const connection = require('./connection');
const util = require("util");
const DB = require("./db");
const cTable = require("console.table");
const { executionAsyncResource } = require('async_hooks');
const { allowedNodeEnvironmentFlags } = require('process');


function start () {
    inquirer
        .prompt({
            name: 'list',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View all employees', 'View all departments', 'View all roles', 'View all employees by department', 'View all employees by manager', 'Add employee', 'Add department', 'Add role', 'Remove employee', 'Update employee role', 'Update employee manager', 'Exit'],
        })
        .then(function (response) {
            switch (response.list) {
                case 'View all employees': allEmpl();
                    break;
                case 'View all departments': allDept();
                    break;
                case 'View all roles': allRoles();
                    break;
                case 'View all employees by department': emplDept();
                    break;
                // case 'View all employees by manager': emplMan();
                //     break;
                case 'Add employee': addEmpl();
                    break;
                case 'Add department': addDept();
                    break;
                case 'Add role': addRole();
                    break;
                // case 'Remove employee': removeEmpl();
                //     break;
                case 'Update employee role': upEmplRole();
                    break;
                // case 'Update employee manager': upEmplMan();
                //     break;
                case 'Exit': connection.end();
                    break;
                    default:
            
            }
        });
};

const allEmpl = () => {
            connection.query('SELECT * FROM employee', (err, res) => {
                if (err) throw err;
                    console.table(res);
                    start();
                });
};

const allDept = () => {
    connection.query('SELECT * FROM departments', (err, res) => {
        if (err) throw err;
            console.table(res);
            start();
        });
};

const allRoles = () => {
    connection.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err;
            console.table(res);
            start();
        });
};

const emplDept = () => {
    connection.query('SELECT * FROM departments', (err, res) => {
        if (err) throw err;
            console.table(res);
            start();
        });
};


// function emplMan() {

// };

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

// };

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
        // LOOK into this one
        const query = 'INSERT INTO roles SET ?';
        connection.query(query, answer, (err, res) => {
            if (err) throw err;
            console.log(`${answer.title} was added to role`)
            start();
            });
        });
};

// function upEmplMan() {

// };

function exit() {
    return;
};

start();

