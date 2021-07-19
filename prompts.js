const inquirer = require('inquirer');


function start () {
    inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View all employees', 'View all employees by department', 'View all employees by manager', 'Add employee', 'Remove employee', 'Update employee role', 'Update employee manager', 'Exit'],
        })
        .then(function (response) {
// Need 7 switch statements
            switch (response.menu) {
                case 'View all employees': allEmployees();
                    break;
                case 'View all employees by department': emplDept();
                    break;
                case 'View all employees by manager': emplMan();
                    break;
                case 'Add employee': addEmpl();
                    break;
                case 'Remove employee': removeEmpl();
                    break;
                case 'Update employee role': upEmplRole();
                    break;
                case 'Update employee manager': upEmplMan();
                    break;
                case 'Exit': exit();
                    break;
                    default;
                    exit();
            }
        });
};





fs.writeFile(process.argv[2], `${response.username}: ${response.password}\n` , (err) => console.log(err));