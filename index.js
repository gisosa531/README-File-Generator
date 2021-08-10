// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")

// User Input Questions
const questions = [
    {
        type:"input",
        name: "username",
        message:"Enter your GitHub username"
    },
    {
        type:"input",
        name: "email",
        message:"Enter your email address "
    },
    {
        type:"input",
        name: "title",
        message:"What's the title of the project?"
    },

    {
        type:"input",
        name: "description",
        message:"What is the project about?"
    },

    {
        type:"input",
        name: "installation",
        message:"What are the steps involved to install the project's dependencies?",
        default: 'npm i',
    },
    {
        type:"input",
        name: "contribution",
        message:"Enter the project's contribution information:"
    },
    {
        type:"input",
        name: "tests",
        message:"What instructions are needed to run tests?",
        default: 'npm test',
    },
    {
        type:"input",
        name: "usage",
        message:"What information does the user need to access the repository?",
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('Success!')
    );
    
}


// Function to initialize app
function init() {
    inquirer.prompt(questions).then((rawData)=>{
    console.log(rawData);
    const markdown = generateMarkdown(rawData);
    writeToFile("README.md", markdown);
    })

}

// Function call to initialize app
init();
