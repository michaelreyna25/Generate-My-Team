const express = require('express');
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');


const app = express();

let internS = [];



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
