const chalk = require('chalk')
const describe = require('./describe')

const it = (msg, fn) => describe(chalk.bold.whiteBright('  ' + msg), fn)

module.exports = it
