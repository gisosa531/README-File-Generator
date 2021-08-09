// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('Success!')
    );
    
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((rawData)=>{
    console.log(rawData);
    const markdown = generateMarkdown(rawData);
    writeToFile("README.md", markdown);
    })

}

// Function call to initialize app
init();
