// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
// Conditional statement, checking whether or not their is a badge, if so, return a badge, if not, retirn an empty string - if there is a badge, you'll be returning a template literal with markdown syntax inside it

// Below is how you would return the badge link
//return `![text to be shown]

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //Same pattern that you used above (conditional statement)
}

// TODO: Create a function to generate markdown for README
//If there is no license, return an empty string

// Could I use a destructure for this?
// Could this be an arrow function?
function generateMarkdown(answers) {
  //Same pattern
  return `# ${answers.title}
  Made by ${answers.username}
  This repo has the ${license} license.
  ## About 
  ${answers.about}

  ## How to use 
  ${answers.use}

  ## Guidelines for Contribution 
  ${answers.contribute}
  
  ## Testing
  ${answers.test}  
  `;
}

module.exports = generateMarkdown;
