const display = require('../../src/app/main/reducers/display')


describe('Display reducers', () => {
  
  test('POMODORO_STARTED should return the timerId and pomodoroId', () => {
    const actionPayload = { timerId: '123', pomodoroId: '456'}
    const state = display({}, {type: 'POMODORO_STARTED', payload: actionPayload})
    expect(state.timerId).toBe('123')
    expect(state.pomodoroId).toBe('456')
    expect(state.ticking).toBeTruthy()
  })

  test('POMODORO_STARTED shared wtesth others, isShared should be true', () => {
    const actionPayload = { timerId: '123', pomodoroId: '456', sharedWith: ['foo']}
    const state = display({}, {type: 'POMODORO_STARTED', payload: actionPayload})
    expect(state.isShared).toBeTruthy()
  })

  test('POMODORO_COMPLETED should reset time', () => {
    const state = display({}, {type: 'POMODORO_COMPLETED', payload: {}})
    expect('25:00').toBe(state.time)
    expect(state.ticking).toBeFalsy()
  })

  test('POMODORO_SQUASHED should reset time', () => {
    const state = display({}, {type: 'POMODORO_SQUASHED'})
    expect('25:00').toBe(state.time)
    expect(state.ticking).toBeFalsy()
  })

  test('POMODORO_VOIDED should reset time', () => {
    const state = display({}, {type: 'POMODORO_VOIDED'})
    expect('25:00').toBe(state.time)
    expect(state.ticking).toBeFalsy()
  })

  test('UPDATE_TIMER should update the time', () => {
    const state = display({}, {type: 'UPDATE_TIMER', payload: {time: 930000}})
    expect('15:30').toBe(state.time)
    expect(state.ticking).toBeTruthy()
  })

  test('RESUME_TIMER should return new timer status', () => {
    const state = display({}, {type: 'RESUME_TIMER', payload: {time: 604000, timerId: '123', pomodoroId: '456'}})
    expect('10:04').toBe(state.time)
    expect('123').toBe(state.timerId)
    expect('456').toBe(state.pomodoroId)
    expect(state.ticking).toBeTruthy()
  })

})