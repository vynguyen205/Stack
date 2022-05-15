var inquirer = require("inquirer")
var fs = require('fs');

inquirer.prompt([
    {
        type: "input",
        message: "what is your name?",
        name: 'name',
    },
    {
        type: 'checkout',
        message: 'what languages do you know?',
        name: 'languages',
        choices: ['css', 'html', 'JS', "Other"],
    },
    {
        type: 'list',
        message: 'What is your preferred method of comunication?',
        name: 'comm-method',
        choices: ['text', 'call', 'email', 'other'],
    },
])
.then((data) => {
    console.log(data)
     fs.writefile('data.text', JSON.stringify(data),
     (err) => err 
     ? console.error(err) 
     : console.log('Submit!'))
 }
);
