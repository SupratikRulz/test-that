const chalk = require('chalk');
const describe = (desc, fn) => {
  console.log(chalk.bold(desc))
  fn()
}

module.exports = describe
