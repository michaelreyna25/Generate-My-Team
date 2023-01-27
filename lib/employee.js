const express = require('express');
const path = require('path');
const fs = require('fs');
const inputs = require('/lib/inputs');
const managerS = require('/lib/managers');
const engineerS = require('/lib/engineer');
const internS = require('/lib/intern');



const generateHTML = (display) => {
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
         <main>
             <div class="container">
                 <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                            <ul class="list-group">
                             ${display}
                            </ul>
                        </div>
                    </div>
                 </div>
             </div>
         </main>
     </body>
     </html>
`};

module.exports = generateHTML;