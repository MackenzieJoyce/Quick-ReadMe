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
        // TITLE //
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        // DESCRIPTION //
        type: "input",
        name: "description",
        message: "What is your project about?",
      },
      {
        // INSTALLATION //
        type: "input",
        name: "installation",
        message: "How will someone install and run this project?",
      },
      {
        // USE //
        type: "input",
        name: "use",
        message: "How do you expect someone to use this project?",
      },
      {
        // CONTRIBUTION //
        type: "input",
        name: "contribute",
        message: "What are the guidelines for contributing to this repository?",
      },
      {
        // TESTING //
        type: "input",
        name: "test",
        message: "Would you like to provide tests?",
      },
      {
        // CREDIT //
        type: "input",
        name: "credit",
        message: "Would you like to credit anyone?",
      },
      {
        // LICENSE //
        type: "list",
        name: "license",
        message: "Will you be licensing the repository?",
        choices: [
          "MIT",
          "Apache",
          "IBM",
          "Creative Commons",
          "Perl",
          "Unlicense",
        ],
      },
      {
        // USERNAME //
        type: "input",
        name: "username",
        message: "Enter your GitHub Username: ",
      },
      {
        // EMAIL //
        type: "input",
        name: "email",
        message: "Enter your email for contact: ",
      },
    ])
    // TODO: Create a function to write README file
    .then((answers) => {
      fs.writeFile("ReadMe.md", generateMarkdown(answers), (err) =>
        err ? console.error(err) : console.log("Making your ReadMe.md now...")
      );
    });
}
init(); // Function call to initialize app
