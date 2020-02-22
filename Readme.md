# Delightful JavaScript Testing with "test-that"!!!

### Light weight javascript/node testing library. NPM package to be added soon

##### Currently supports ```toBe()``` matcher method - more comming soon!
## Usage Guide
```javascript

const { describe, it, expect } = require('test-that')

const add = (number1, number2) => number1 + number2

describe('Test add()', () => {
  it('should return 2', () => {
    expect(add(1,1)).toBe(2)
  })

  it('should return -1', () => {
    expect(add(2, -3)).toBe(-1)
  })
})

```
<br/>
<br/>


##### <center>Made with <span style="color:red">&nbsp;❤&nbsp;</span> by **Supratik Basu**</center>