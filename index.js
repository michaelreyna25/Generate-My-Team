const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

function getManager() {
    inquirer.createPromptModule([
        {

        },
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