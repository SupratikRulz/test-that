const chalk = require('chalk')

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log(chalk.bold.greenBright('✓ PASS'))
      return true
    } else {
      console.log(chalk.bold.redBright('✗ FAIL'))
      return false
    }
  }
})

module.exports = matchers
