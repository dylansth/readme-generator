const inquirer = require('inquirer');
const fs = require ('fs');
const questions = require ('./questions');
const markdown = require ('./markdowngenerator');
const getLicense = require('./license');

function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('Answers:', answers);

        const markdownContent = markdown(answers);
        console.log('Markdown:', markdownContent);

        const { badge, notice } = getLicense(answers.license);
        console.log('License Badge:', badge);
        console.log('License Notice:', notice);

        fs.writeFile('README.md', markdownContent, (err) =>
        err ? console.log(err) : console.log('success')
        );
    });
}

init();
