// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}
//   if(!license) {
//     return '';
//   };
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
//   if (!license) {
//     return '';
//   }
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
//   if (!license) {
//     return '';
//   } else if (license)
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}

  ## Table of contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage Information](#usage)
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

  ## Contribution Guidelines
  ${data.contribution}

  ## Test-Instructions
  Perfrom the following command to run tests: 

  \`\`\`
  ${data.tests}
  \`\`\`

  ## Contact Info
  If you have any problems concerning the repo, please file an issue or email me at 
  ${ data.email}
  The link to my work repositories is 
  [${data.username}](https://github.com/${data.username}/).

`;
}

module.exports = generateMarkdown;
