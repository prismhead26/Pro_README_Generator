// Includes packages needed for this application
const inquirer = require('inquirer')
const { writeFile } = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
const { error } = require('console');
// Array of questions for user input
const questions = [
        {
            name: "title",
            message: "What is the name of your Project Title?",
        },
        {
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project.'
        },
        {
            name: 'installation',
            message: 'Provide instructions and examples for use. Include screenshots as needed.  To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: ![alt text](assets/images/screenshot.png)'
        },
        {
            name: 'usage',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        },
        {
            name: 'contribution',
            message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
        },
        {
            name: "test",
            message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license for your project.",
            choices: ['The MIT License', 'Apache 2.0 License', 'GNU GPL v3', 'Mozilla Public License 2.0', 'BSD 3-Clause License', 'none']
        },
        {
            name: "github",
            message: "Create a link by providing your GitHub profile name.",
        },
        {
            name: "email",
            message: "Provide a link to your email for questions.",
        },
        {
            name: "features",
            message: "If your project has a lot of features, list them here.",
        }
];
// Function writes README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, (err) => { 
        if (err) return error(err)
    
    console.log('Woop woop READme file has been successfuly created.')
    })
}
// Function initializes app .... using async/await rather than .then/catch
async function init() {
    console.log('Welcome... professional READme generator is spooling up.')

    const answers = await inquirer.prompt(questions)

    writeToFile('(Generated)READme.md', generateMarkdown(answers))
}
// Function calls to initialize app
init();
