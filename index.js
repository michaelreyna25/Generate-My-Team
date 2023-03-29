const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

function getManager() {
    inquirer.prompt([
        {
            message: 'Enter the name',
            name: 'name',

        },
        {
            type: 'number',
            message: 'Enter the employee id',
            name: 'id',
        },
        {
            message: 'Enter the email address',
            name: 'email',
        },
        {
            type: 'number',
            message: 'Enter the office number',
            name: 'officeNumber'
        }
    ]).then((response) => {
        let manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        fs.writeFile('./dist/index.html',
            `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>My Team</h1>
    <div class="container">
        <div class="card">
            <div class="title">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </div>
            <div class="details">
                <p><strong>ID: </strong><span>${manager.id}</span></p>
                <p><strong>Email: </strong><a href="mailto:${manager.email}"><span>${manager.email}</span></p></a>
                <p><strong>Office Number: </strong><span>${manager.officeNumber}</span></p>
                </div>
            </div>`, err => {
            err ? console.error(err)
                : continuePrompt();
        })
    })
}

function continuePrompt() {
    inquirer.prompt(
        {
            type: 'list',
            message: 'Please select am option.',
            choices: ['Add engineer', 'Add intern', 'End team building'],
            name: 'continuePrompt'
        }
    ).then((response) => {
        if (response.continuePrompt === 'Add engineer') {
            addEngineer();
        }
        if (response.continuePrompt === 'Add intern') {
            addIntern();
        }
        if (response.continuePrompt === 'End team building') {
            endTeamBuld();
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: 'Enter the name',
            name: 'name',
        },
        {
            type: 'number',
            message: 'Enter the employee id',
            name: 'id',
        },
        {
            message: 'Enter the email address',
            name: 'email',
        },
        {
            message: 'Enter the GitHub username',
            name: 'github'
        }
    ]).then((response) => {
        let engineer = new Engineer(response.name, response.id, response.email, response.github);
        fs.appendFile('./dist/index.html',
            `<div class="card">
            <div class="title">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3>
            </div>
            <div class="details">
                <p><strong>ID: </strong><span>${engineer.id}</span></p>
                <p><strong>Email: </strong><a href="mailto:${engineer.email}"><span>${engineer.email}</span></p></a>
                <p><strong>GitHub: </strong><a href="https://github.com/${engineer.github}" target="_blank"><span>${engineer.github}</span></a></p>
            </div>
        </div>`, err => {
                    err ? console.error(err) :
                    continuePrompt();
        });
    });
}

function addIntern() {
    inquirer.prompt([
        {
            message: 'Enter the name',
            name: 'name',
        },
        {
            type: 'number',
            message: 'Enter the employee id',
            name: 'id',
        },
        {
            message: 'Enter the email address',
            name: 'email',
        },
        {
            message: 'Enter the school',
            name: 'school'
        }
    ])
        .then((response) => {
            let intern = new Intern(response.name, response.id, response.email, response.school);
            fs.appendFile('./dist/index.html', 
    `<div class="card">
        <div class="title">
            <h2>${intern.name}</h2>
            <h3>Intern</h3>
        </div>
        <div class="details">
            <p><strong>ID: </strong><span>${intern.id}</span></p>
            <p><strong>Email: </strong><a href="mailto:${intern.email}"><span>${intern.email}</span></p></a>
            <p><strong>School: </strong><span>${intern.school}</span></p>
        </div>
    </div>`, err => {
                err ? console.log(err)
                    : continuePrompt();
            });
        })
}

function endTeamBuld() {
    fs.appendFile('./dist/index.html', `
</div>
</body>
</html>`, err => {
        err ? console.log(err)
            : console.log('HTML file generated!')
    });
}

getManager();