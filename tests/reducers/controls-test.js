var controls = require('../../src/app/main/reducers/controls')
var assert = require('chai').assert

describe('Controls reducers', () => {
  
  it('POMODORO_STARTED should return buttons status', () => {
    const state = controls({}, {type: 'POMODORO_STARTED'})
    assert.isTrue(state.startDisabled)
    assert.isFalse(state.squashDisabled)
  })
})