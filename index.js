const express = require('express');
const inquirer = require('inquirer');
const jest = require('jest');

const fs = require('fs');
const path = require('path');

const app = express();

const managerInput = manager => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: `What is the ${manager}'s name?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'managerId',
            message: `What is the ${manager}'s ID?`,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: `What is the ${manager}'s email?`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: `What is the ${manager}'s office number?`,
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter an office number!');
                    return false;
                }
            }
        }
    ])
}

const engineerInput = engineer => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: `What is the ${engineer}'s name?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'engineerId',
            message: `What is the ${engineer}'s ID?`,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an ID!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'engineerEmail',
            message: `What is the ${engineer}'s email?`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'engineerGithub',
            message: `What is the ${engineer}'s GitHub username?`,
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter a GitHub username!');
                    return false;
                }
            }
        }]);
}
const internInput = intern => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: `What is the ${intern}'s name?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: `What is the ${intern}'s ID?`,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: `What is the ${intern}'s email?`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: `What is the ${intern}'s school?`,
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a school!');
                    return false;
                }
            }
        }]);
}