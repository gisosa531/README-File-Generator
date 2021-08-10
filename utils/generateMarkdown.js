// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'None') {
    return '';
  } else if (license == 'MIT') {
    return `![license](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  } else if (license == 'APACHE 2.0') {
    return `![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license == 'GPL 3.0') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license == 'BSD 3') {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  } else if (license == 'Mozilla') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `\n * [License](#license) \n`;
  } else if (license == 'None') {
    return '';
  }};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return '';
  } else if (license) {
    return `## License
  
  This Project is licensed under [${license}](https://opensource.org/licenses/${license})`;
  }};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}

  ## Table of contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage Information](#usage)
  ${renderLicenseLink(data.license)}
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Contact Info](#questions)

  
  ## Installation
  Run the following command for proper installation of dependencies:
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage Information
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contribution Guidelines
  ${data.contribution}

  ## Test-Instructions
  Perfrom the following command to run tests: 

  \`\`\`
  ${data.tests}
  \`\`\`

  ## Contact Information
  If you have any problems concerning the repo, please file an issue or email me at 
  ${ data.email}
  The link to my work repositories is 
  [Github Profile](https://github.com/${data.username}/).

`;
}

module.exports = generateMarkdown;