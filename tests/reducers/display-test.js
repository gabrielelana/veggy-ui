var display = require('../../src/app/main/reducers/display')
var assert = require('chai').assert

describe('Display reducers', () => {
  
  it('POMODORO_STARTED should return the timerId and pomodoroId', () => {
    const actionPayload = { timerId: '123', pomodoroId: '456'}
    const state = display({}, {type: 'POMODORO_STARTED', payload: actionPayload})
    assert.equal(state.timerId, '123')
    assert.equal(state.pomodoroId, '456')
    assert.isTrue(state.ticking)
  })

  it('POMODORO_ENDED should return reset time', () => {
    const state = display({}, {type: 'POMODORO_ENDED', payload: {}})
    assert.isOk(state.time)
    assert.isFalse(state.ticking)
  })

  it('POMODORO_SQUASHED should return buttons status', () => {
    const state = display({}, {type: 'POMODORO_SQUASHED'})
    assert.isFalse(state.ticking)
  })

})