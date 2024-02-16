// Function returns a license badge based on which license is passed in
renderLicenseBadge = license => {
  if (!license) return ""

  switch(license) {
    case 'Apache 2.0 License':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    case 'The MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'BSD 3-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
}
// Function returns the license link
renderLicenseLink = license => {
  if (!license) return ''

  switch(license){
    case 'Apache 2.0 License':
      return '(https://opensource.org/licenses/Apache-2.0)'
    case 'GNU GPL v3':
      return '(https://www.gnu.org/licenses/gpl-3.0)'
    case 'Mozilla Public License 2.0':
      return '(https://opensource.org/licenses/MPL-2.0)'
    case 'The MIT License':
      return '(https://opensource.org/licenses/MIT)'
    case 'BSD 3-Clause License':
      return '(https://opensource.org/licenses/BSD-3-Clause)'
  }
}

// Function returns the license section of README
renderLicenseSection = license => {
  if (!license) return ''

  return `## License:
  
  Licensed under the ${license} license.
  
  ${renderLicenseBadge(license)}\
  ${renderLicenseLink(license)}`
}
// Function generates markdown for README
generateMarkdown = data => {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description:
  ${data.description}
  
  ## Table of Contents:
  - [Installation Instructions](#Installation-Instructions)
  - [Usage Information](#Usage-Information)
  - [Links](#Links)
  - [Features](#Features)
  - [Contribution Guidelines](#Contribution-Guidelines)
  - [Test Instructions](#Test-Instructions)
  - [License](#License)
  - [Questions](#Questions)

  ## Installation Instructions:
  ${data.installation}
  
  ## Usage Instructions:
  ${data.usage}

  ## Links

  ## Features
  ${data.features}
  
  ## Contribution Guidelines:
  ${data.contribution}
  
  ## Test Instructions:
  ${data.test}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions:
  For additonal questions or concerns, feel free to contact me via [email]${data.email}. 
  You can also find me on Github at [${data.github}](https://github.com/${data.github}).
  
  © 2024 ${data.username}. All Rights Reserved.`;
}
// Allows the ability to export generateMarkdown func
module.exports = generateMarkdown;
