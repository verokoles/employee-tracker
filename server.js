const inquirer = require('inquirer');
// use database AFTER we inquire
const db = require('./config/connection');
const {viewDept} = require("./queries");

const promptUser = () => {
    //inquirer asks questions and takes answers to menyChoice
     inquirer.prompt([
        {
            type: 'list',
            name: 'menuChoice',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
        'Add an employee',
    'Update employee']
        },
    ])
    .then( async promptChoice => {
        // run prompts for depts
        let menuChoice = promptChoice.menuChoice
        if (menuChoice === 'View all the departments'){
        viewDept().then(data=>{
            console.log(data)})
        let departments = await viewDept()
        console.log(departments);
        }
        // run for roles
        else if (menuChoice === 'View roles') {
            viewRoles().then(data => {
                console.log(data)
            })
        }
        else if (menuChoice === 'View employees') {
            viewEmployees().then(data => {
                console.log(data);
            })
    } else if (menuChoice === 'Add another department') {
         addDept().then(data => {
            console.log(data);
    })
} else if (menuChoice === 'Add another role') {
    addRole().then(data => {
       console.log(data);
})
} else if (menuChoice === 'Add another employee') {
    addEmployee().then(data => {
       console.log(data);
})
} else if (menuChoice === 'Update employee') {
    updateEmployee().then(data => {
       console.log(data);
})
};
    };

promptUser();