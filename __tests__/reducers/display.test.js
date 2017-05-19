const display = require('../../src/app/main/reducers/display')
import * as Action from '../../src/app/main/action'

describe('Display reducers', () => {
  
  test('PomodoroStarted should return the timerId and pomodoroId', () => {
    const actionPayload = { timerId: '123', pomodoroId: '456'}
    const state = display({}, {type: Action.PomodoroStarted, payload: actionPayload})
    expect(state.timerId).toBe('123')
    expect(state.pomodoroId).toBe('456')
    expect(state.ticking).toBeTruthy()
  })

  test('PomodoroStarted shared wtesth others, isShared should be true', () => {
    const actionPayload = { timerId: '123', pomodoroId: '456', sharedWith: ['foo']}
    const state = display({}, {type: Action.PomodoroStarted, payload: actionPayload})
    expect(state.isShared).toBeTruthy()
  })

  test('PomodoroCompleted should reset time', () => {
    const state = display({}, {type: Action.PomodoroCompleted, payload: {}})
    expect('25:00').toBe(state.time)
    expect(state.ticking).toBeFalsy()
  })

  test('PomodoroSquashed should reset time', () => {
    const state = display({}, {type: Action.PomodoroSquashed})
    expect('25:00').toBe(state.time)
    expect(state.ticking).toBeFalsy()
  })

  test('PomodoroVoided should reset time', () => {
    const state = display({}, {type: Action.PomodoroVoided})
    expect('25:00').toBe(state.time)
    expect(state.ticking).toBeFalsy()
  })

  test('UpdateTimer should update the time', () => {
    const state = display({}, {type: Action.UpdateTimer, payload: {time: 930000}})
    expect('15:30').toBe(state.time)
    expect(state.ticking).toBeTruthy()
  })

  test('ResumeTimer should return new timer status', () => {
    const state = display({}, {type: Action.ResumeTimer, payload: {time: 604000, timerId: '123', pomodoroId: '456'}})
    expect('10:04').toBe(state.time)
    expect('123').toBe(state.timerId)
    expect('456').toBe(state.pomodoroId)
    expect(state.ticking).toBeTruthy()
  })

})