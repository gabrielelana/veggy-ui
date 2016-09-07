var controls = require('../../src/reducers/controls')
var assert = require('chai').assert

describe('Controls reducers', () => {
  
  it('POMODORO_STARTED should return buttons status', () => {
    const state = controls({}, {type: 'POMODORO_STARTED'})
    assert.isTrue(state.startDisabled)
    assert.isFalse(state.squashDisabled)
  })

  it('POMODORO_SQUASHED should return buttons status', () => {
    const state = controls({}, {type: 'POMODORO_SQUASHED'})
    assert.isFalse(state.startDisabled)
    assert.isTrue(state.squashDisabled)
  })

})