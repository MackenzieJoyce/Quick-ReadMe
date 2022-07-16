// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  (`${answers.license}` === "") ? console.log("There will be no lisence for this project")
    
    (`${answers.license}` === "Apache") ? "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" :
    
      (`${answers.license}` === "MIT") ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" :
        
        (`${answers.license}` === "IBM") ? "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" :
          
          (`${answers.license}` === "Perl") ? "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)" :
}

// Below is how you would return the badge link
//return `![text to be shown]

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //Same pattern that you used above (conditional statement)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  //Same pattern
  return `# ${answers.title}
  Made by ${answers.username}
  ${answers.license}
  ## About 
  ${answers.about}

  ## How to use 
  ${answers.use}

  ## Guidelines for Contribution 
  ${answers.contribute}
  
  ## Testing
  ${answers.test}
  
  ## License
  ${answers.license} //PLACEHOLDER - Probably not like this 
  `;
}

module.exports = generateMarkdown;
