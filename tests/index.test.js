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

describe('Test subtract()', () => {
  it('should return 2', () => {
    expect(subtract(3,1)).toBe(2)
  })

  it('should return -1', () => {
    expect(subtract(2, 3)).toBe(-1)
  })
})

describe('Test divide()', () => {
  it('should return 2', () => {
    expect(divide(2,1)).toBe(2)
  })

  it('should return -1', () => {
    expect(divide(-2, 2)).toBe(-1)
  })
})

describe('Test multiply()', () => {
  it('should return 2', () => {
    expect(multiply(2,1)).toBe(2)
  })

  it('should return -1', () => {
    expect(multiply(1, -1)).toBe(-1)
  })
})

describe('Fail Tests', () => {
  describe('Add Should fail', () => {
    it('should return 2', () => {
      expect(add(1, "1")).toBe(2)
    })
  })
})
