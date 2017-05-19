const display = require('../../src/app/main/reducers/display')
import * as Action from '../../src/app/main/action'

describe('Display reducers', () => {
  
  test('PomodoroStarted should return the timer_id and pomodoro_id', () => {
    const actionPayload = { timer_id: '123', pomodoro_id: '456'}
    const state = display({}, {type: Action.PomodoroStarted, payload: actionPayload})
    expect(state.timer_id).toBe('123')
    expect(state.pomodoro_id).toBe('456')
  })

  test('PomodoroStarted shared wtesth others, is_shared should be true', () => {
    const actionPayload = { timer_id: '123', pomodoro_id: '456', shared_with: ['foo']}
    const state = display({}, {type: Action.PomodoroStarted, payload: actionPayload})
    expect(state.is_shared).toBeTruthy()
  })

  test('PomodoroCompleted should reset time', () => {
    const state = display({}, {type: Action.PomodoroCompleted, payload: {}})
    expect('25:00').toBe(state.time)
  })

  test('PomodoroSquashed should reset time', () => {
    const state = display({}, {type: Action.PomodoroSquashed})
    expect('25:00').toBe(state.time)
  })

  test('PomodoroVoided should reset time', () => {
    const state = display({}, {type: Action.PomodoroVoided})
    expect('25:00').toBe(state.time)
  })

  test('UpdateTimer should update the time', () => {
    const state = display({}, {type: Action.UpdateTimer, payload: {time: 930000}})
    expect('15:30').toBe(state.time)
  })

  test('ResumeTimer should return new timer status', () => {
    const state = display({}, {type: Action.ResumeTimer, payload: {time: 604000, timer_id: '123', pomodoro_id: '456'}})
    expect('10:04').toBe(state.time)
    expect('123').toBe(state.timer_id)
    expect('456').toBe(state.pomodoro_id)
  })

})