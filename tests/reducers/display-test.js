const display = require('../../src/app/main/reducers/display')
const assert = require('chai').assert

describe('Display reducers', () => {
  
  it('POMODORO_STARTED should return the timerId and pomodoroId', () => {
    const actionPayload = { pomodoroId: '456'}
    const state = display({}, {type: 'POMODORO_STARTED', payload: actionPayload})
    assert.equal(state.pomodoroId, '456')
    assert.isTrue(state.ticking)
  })

  it('POMODORO_COMPLETED should reset time', () => {
    const state = display({}, {type: 'POMODORO_COMPLETED', payload: {}})
    assert.equal('25:00', state.time)
    assert.isFalse(state.ticking)
  })

  it('POMODORO_SQUASHED should reset time', () => {
    const state = display({}, {type: 'POMODORO_SQUASHED'})
    assert.equal('25:00', state.time)
    assert.isFalse(state.ticking)
  })

  it('UPDATE_TIMER should update the time', () => {
    const state = display({}, {type: 'UPDATE_TIMER', payload: {time: 930000}})
    assert.equal('15:30', state.time)
    assert.isTrue(state.ticking)
  })
})