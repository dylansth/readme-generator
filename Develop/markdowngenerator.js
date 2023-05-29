const getLicense = require("./license");

function markdowngenerator(answers) {
    const { badge, notice } = getLicense();

    return `
    # ${answers.title}

    ${badge}

    ## Description

    ${answers.description}

    ## Table of Contents

    1. [Installation](##-installation)
    2. [Usage](##-usage)
    3. [Contribution Guidelines](##-contribution-guidelines)
    4. [Test Instructions](##-test-instructions)
    5. [License](##-license)
    6. [Questions](##-questions)

    ## Installation

    ${answers.installation}

    ## Usage

    ${answers.usage}

    ## Contribution Guidelines

    ${answers.contributing}

    ## Test Instructions

    ${answers.instructions}

    ## License

    ${notice}

    ## Questions

    GitHub: ${answers.github}
    Email: ${answers.email}`
}

module.exports = markdowngenerator;