// TODO: Include packages needed for this application
const fs = require("fs"); // No need for install, part of node core
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
        default: "My Repo",
      },
      {
        // DESCRIPTION //
        type: "input",
        name: "description",
        message: "What is your project about?",
        default: "My latest project",
      },
      {
        // INSTALLATION //
        type: "input",
        name: "installation",
        message: "How will someone install and run this project?",
        default: "",
      },
      {
        // USE //
        type: "input",
        name: "use",
        message: "How do you expect someone to use this project?",
        default: "",
      },
      {
        // CONTRIBUTION //
        type: "input",
        name: "contribute",
        message: "What are the guidelines for contributing to this repository?",
        default: "",
      },
      {
        // TESTING //
        type: "input",
        name: "test",
        message: "Would you like to provide tests?",
        default: "",
      },
      {
        // CREDIT //
        type: "input",
        name: "credit",
        message: "Would you like to credit anyone?",
        default: "",
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
        default: "",
      },
      {
        // EMAIL //
        type: "input",
        name: "email",
        message: "Enter your email for contact: ",
        default: "",
      },
    ])
    // TODO: Create a function to write README file
    .then((answers) => {
      fs.writeFile(
        "./utils/ReadMe.md",
        generateMarkdown(answers),
        (
          err // Write a path so the .md goes into utils folder
        ) => (err ? console.error(err) : console.log("ReadMe.md generated!"))
      );
    });
}
init(); // Function call to initialize app
