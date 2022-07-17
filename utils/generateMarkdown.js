// TODO: Return a license badge based on which license is passed in
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
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
  </br></br>

  ## Table of Contents
  - [Installation](#installation)
  - [Use](#use)
  - [Guidlines for Contribution](#guidelines-for-contribution)
  - [Testing](#testing)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions) 
  </br></br>

  ## Installation
  ${answers.installation}
  </br></br>

  ## Use 
  ${answers.use}
  </br></br>

  ## Guidelines for Contribution
  ${answers.contribute}
  </br></br>

  ## Testing
  ${answers.test}
  </br></br>

  ## Credits 
  ${answers.credit}
  </br></br>

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
  </br></br>
  
  ## Questions
  <p>View my other GitHub projects on my profile: <a href="https://github.com/${
    answers.username
  }">${answers.username}</a></p> 
  <p>For additional questions, you can contact me at <a href="mailto:${
    answers.email
  }">${answers.email}</a></p>

  `;
}

module.exports = generateMarkdown;
