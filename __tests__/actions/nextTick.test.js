var nextTick = require('../../src/app/main/actions/nextTick')

describe('nextTick', () => {
  
  test('giving 4 secs next tick should be 3 secs', () => {
    const next = nextTick(4000)
    expect(3000).toEqual(next)
  })

  test('giving 25 minutes next tick should be 24:59', () => {
    const next = nextTick(1500000)
    expect(1499000).toEqual(next)
  })

  test('giving 1 sec next tick should be 0', () => {
    const next = nextTick(1000)
    expect(0).toEqual(next)
  })
})