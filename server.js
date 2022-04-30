const inquirer = require('inquirer');
// use database AFTER we inquire
const db = require('./config/connection');
const {checkDept} = require("./queries");

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
    .then(({menuChoice}) => {
        // run prompts for depts
        if (promptChoices.menuChoice === 'View all departments') {
            viewDept();
        }
        // run for roles
        else if (promptChoices.menuChoice === 'View all roles')
    }
    else if (promptChoices.menuChoice === 'View all roles')
}
else if (promptChoices.menuChoice === 'View all roles')
}
else if (promptChoices.menuChoice === 'View all roles')
}
else if (promptChoices.menuChoice === 'View all roles')
}
else if (promptChoices.menuChoice === 'View all roles')
})
}
promptUser();