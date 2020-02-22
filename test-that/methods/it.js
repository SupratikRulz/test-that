import describe from './describe'

const it = (msg, fn) => describe('  ' + msg, fn)

export default it
