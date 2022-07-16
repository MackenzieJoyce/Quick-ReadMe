// TODO: Include packages needed for this application
// fs, inquirer, path, generateMarkdown.js - require
const fs = require("fs"); // No need for install, part of node core
const path = require("path"); // No need for install, part of node core
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create a function to initialize app
function init() {
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
    // TODO: Create a function to write README file
    .then((answers) =>
      fs.writeFile("ReadMe.md", generateMarkdown(answers), (err) =>
        err ? console.error(err) : console.log("Making your ReadMe.md now...")
      )
    );
}
init(); // Function call to initialize app
