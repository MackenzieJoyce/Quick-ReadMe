// TODO: Return a license badge based on which license is passed in

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  //Same pattern
  return `
  # ${answers.title}

  ${
    answers.license === "MIT"
      ? `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      : answers.license === "Apache"
      ? `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      : answers.license === "IBM"
      ? `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
      : answers.license === "Creative Commons"
      ? `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
      : answers.license === "Perl"
      ? `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
      : `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
  
  ## Description 
  ${answers.description}

  ## Tableof Contents
  - [Installation](##answers.installation)
  - [Use](##answers.use)
  - [Guidlines for Contribution](##answers.contribute)
  - [Testing](##answers.test)
  - [Credits](##answers.credit)
  - [License](##answers.license)
  - [Questions](##answers.questions)

  ## Installation
  ${answers.installation}
  
  ## Use 
  ${answers.use}

  ## Guidelines for Contribution
  ${answers.contribute}
  
  ## Testing
  ${answers.test}

  ## Credits 
  ${answers.credit}
  
  ## License 
  ${
    answers.license === "MIT"
      ? `MIT`
      : answers.license === "Apache"
      ? `Apache`
      : answers.license === "IBM"
      ? `IBM`
      : answers.license === "Creative Commons"
      ? `Creative Commons`
      : answers.license === "Perl"
      ? `Perl`
      : `The Unlicense`
  }

  ## Questions
  [!You can see my other work at ]${answers.username}
  [!For additional questions, you can contact me at ]${answers.email}

  `;
}

module.exports = generateMarkdown;

// Create variable with url added for answers.username
