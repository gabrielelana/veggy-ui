var display = require('../../src/reducers/display')
var assert = require('chai').assert

describe('Display reducers', () => {
  
  it('POMODORO_STARTED should return the timer id', () => {
    const state = display({}, {type: 'POMODORO_STARTED', payload: { clientTimerId: 42}})
    assert.isOk(state.clientTimerId)
  })

  it('POMODORO_SQUASHED should return buttons status', () => {
    const state = display({}, {type: 'POMODORO_SQUASHED'})
    assert.isNull(state.clientTimerId)
  })

})