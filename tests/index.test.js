const {
  describe,
  it,
  expect
} = require('../test-that')

const {
  add,
  subtract,
  divide,
  multiply
} = require('./')

describe('Test add()', () => {
  it('should return 2', () => {
    expect(add(1,1)).toBe(2)
  })

  it('should return -1', () => {
    expect(add(2, -3)).toBe(-1)
  })
})
