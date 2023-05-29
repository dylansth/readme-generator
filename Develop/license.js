function getLicense(license) {
    let badge = '';
    let notice = '';
  
    switch (license) {
      case 'MIT License':
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        notice = 'This application is covered under the MIT License.';
        break;
      case 'GNU GPLv3':
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        notice = 'This Application is covered under the GNU GPLv3.';
        break;
      case 'None':
        badge = 'No license badge';
        notice = 'This application is not licensed';
        break;
      default:
        badge = '';
        notice = '';
    }
    return {
        badge,
        notice
    };
}

module.exports = getLicense;