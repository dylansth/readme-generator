const questions = ([
    {
        type: 'input',
        name: 'title',
        message:'Enter the title of your project',
    },
    {
        type: 'input',
        name: 'description',
        message:'Enter the description',
    },
    {
        type: 'input',
        name: 'installation',
        message:'Enter the installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message:'Enter the usage',
    },
    {
        type: 'input',
        name: 'contributing',
        message:'Enter the contribution guidelines',
    },
    {
        type: 'input',
        name: 'instructions',
        message:'Enter the test instructions',
    },
    {
        type: 'list',
        name: 'license',
        message:'Choose a liscense',
        choices: ['MIT License', 'GNU GPLv3', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message:'Enter your github link',
    },
    {
        type: 'input',
        name: 'email',
        message:'Enter your email',
    },
])

module.exports = questions