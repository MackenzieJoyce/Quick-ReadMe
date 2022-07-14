// TODO: Include packages needed for this application
// fs, inquirer, path, generateMarkdown.js - require
const fs = require("fs"); // No need for install, part of node core
const path = require("path"); // No need for install, part of node core
const inquirer = require("inquirer");
const generateMarkdown = require("generateMarkdown");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github username?",
    },
    {
      type: "input",
      name: "about",
      message: "What is your project about?",
    },
    {
      type: "input",
      name: "use",
      message: "How will someone use this?",
    },
    {
      type: "input",
      name: "contribute",
      message: "What are the guidelines for using this repo?",
    },
    {
      type: "input",
      name: "test",
      message: "What are the test instructions?",
    },
    {
      type: "list",
      name: "license",
      message: "Which opensource license are you going to use?",
      choices: ["MIT", "Perl", "Apache"],
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log("Success!")
      : console.log("You forgot your password already?!")
  );

// TODO: Create a function to initialize app
function init() {
  //Use inquirer and prompt to show the questions, take in the responses, and then write the responses to the file
  //Activity 20
  //Inside of writeToFile - file name, call your generateMarkdown function and pass in the responses that you got from the questions
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //Use fs to write the file, path
  //Use activity 13
}

// Function call to initialize app
init();
