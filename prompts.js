const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What would you like to do?',
      name: '',
    },
    {
      type: 'input',
      message: '?',
      name: '',
    },
    {
      type: 'input',
      message: '',
      name: '',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );


fs.writeFile(process.argv[2], `${response.username}: ${response.password}\n` , (err) => console.log(err));