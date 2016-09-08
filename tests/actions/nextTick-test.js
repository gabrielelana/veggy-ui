var nextTick = require('../../src/app/main/actions/nextTick')
var assert = require('chai').assert

describe('nextTick', () => {
  
  it('giving 25:00 next tick should be 24.59', () => {
    const next = nextTick('25:00')
    assert.equal('24:59', next)
  })

  it('giving 24:10 next tick should be 24.09', () => {
    const next = nextTick('24:10')
    assert.equal('24:09', next)
  })

  it('giving 10:00 next tick should be 09.59', () => {
    const next = nextTick('10:00')
    assert.equal('09:59', next)
  })
})