const fs = require('fs');
const inquirer = require('inquirer');

let readmeWrapper =(data) =>
`# ${data.title}


## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)
- [Contact](#contact)

## Installation

${data.installation}

## Usage
${data.usage}

##Locense
${data.license}

## Contributors
${data.contributors}

## Tests
${data.tests}

## Questions
${data.questions}

## Contact
[GitHub Profile]({https://github.com/${data.github})
[Email Me](${data.email})
}}`;


inquirer.prompt([
	{
		type: 'input',
		name: 'title',
		message: 'What is the title of your project?',
	},
	{
		type: 'input',
		name: 'description',
		message: 'Provide a short description of the project?',
	},
	{
		type: 'input',
		name: 'installation',
		message: 'What are the required steps to install the project?',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'How do you use this project?',
	},
	{
		type: 'list',
		name: 'license',
		message: 'Which license do you want to use from the following:',
		choices: ['MIT','ISC','GNUPLv3'],
	},
	{
		type: 'input',
		name: 'contributors',
		message: 'Who contributed to this project?',
	},
	{
		type: 'input',
		name: 'github',
		message: 'What github do you want to use?',
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email address?',
	}
])

.then((answers) => {
	const userInput = readmeWrapper(answers)
 fs.writeFile('README.md', userInput, (err) =>
   err ? console.error(err) : console.log('Success!')
 ); 
 })