const express = require('express');
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');


const app = express();

let managerS = [];



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
    ]);
    
}
