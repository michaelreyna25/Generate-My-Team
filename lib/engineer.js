const express = require('express');
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');


const app = express();

let engineerS = [];



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