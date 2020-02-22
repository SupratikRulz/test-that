const describe = require('./describe')

const it = (msg, fn) => describe('  ' + msg, fn)

module.exports = it
