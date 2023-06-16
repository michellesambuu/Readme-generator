// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"what is the title of the project",
    },
    {
        type:"input",
        name:"description",
        message:"what is the description of the project",
    },
    {
        type:"input",
        name:"installation",
        message:"what are the steps for the installation",
    },
    {
        type:"input",
        name:"usage",
    message:"how to use your application",
    },
    {
        type:"list",
        name:"license",
    message:"which license is your project under",
    choices:["MIT", "ISC", "GNU", "APACHE2.0","None"]
    },
    {
        type:"input",
        name:"contribution",
    message:"what are the contributions guidelines",
    },
    {
        type:"input",
        name:"test",
    message:"what tests to run",
    },
    {
        type:"input",
        name:"email",
    message:"what is your email",
    },
    {
        type:"input",
        name:"github",
    message:"what is your github username",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync (path.join(fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile("README.md",generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
