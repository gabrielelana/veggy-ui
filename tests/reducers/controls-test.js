var controls = require('../../src/reducers/controls')
var assert = require('chai').assert

describe('Controls reducers', () => {
  
  it('START_TIMER should return buttons status', () => {
    const state = controls({}, {type: 'START_TIMER'})
    assert.isTrue(state.startDisabled)
    assert.isFalse(state.squashDisabled)
  })

  it('SQUASH_TIMER should return buttons status', () => {
    const state = controls({}, {type: 'SQUASH_TIMER'})
    assert.isFalse(state.startDisabled)
    assert.isTrue(state.squashDisabled)
  })

})