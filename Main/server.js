const mysql = require('mysql2');
const inquirer = require('inquirer');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_user',
  password: 'your_password',
  database: 'your_database',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database');
  showOptions();
});

// Display available options to the user
function showOptions() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'option',
        message: 'Choose an option:',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
        ],
      },
    ])
    .then((answers) => {
      const selectedOption = answers.option;
      // Implement logic for each option
      if (selectedOption === 'View all departments') {
        // Execute database query to retrieve and display departments
      } else if (selectedOption === 'View all roles') {
        // Execute database query to retrieve and display roles
      } else if (selectedOption === 'View all employees') {
        // Execute database query to retrieve and display employees
      } else if (selectedOption === 'Add a department') {
        // Prompt user for department details and execute database query to add department
      } else if (selectedOption === 'Add a role') {
        // Prompt user for role details and execute database query to add role
      } else if (selectedOption === 'Add an employee') {
        // Prompt user for employee details and execute database query to add employee
      } else if (selectedOption === 'Update an employee role') {
        // Prompt user for employee role update details and execute database query to update role
      }
    });
}

// Close the database connection when the application exits
process.on('exit', () => {
  connection.end();
});