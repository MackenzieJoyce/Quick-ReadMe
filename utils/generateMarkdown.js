// TODO: Return a license badge based on which license is passed in

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  //Same pattern
  return `# ${answers.title}
  ${answers.username}

  ${
    answers.license === "MIT"
      ? `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      : answers.license === "Apache"
      ? `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      : answers.license === "IBM"
      ? `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
      : answers.license === "Creative Commons"
      ? `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
      : `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
  }
  
  ## About 
  ${answers.about}

  ## Tableof Contents
  - [](#)
  - [](#)
  - [](#)
  - [](#)
  
  ## How to Run the Project
  ${answers.run}

  ## Guidelines for Contribution 
  ${answers.contribute}
  
  ## Testing
  ${answers.test}

  ## Credits 
  ${answers.credit}
  `;
}

module.exports = generateMarkdown;
