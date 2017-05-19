var timers = require('../../src/app/main/reducers/timers')

const payload = [
  {
    pomodoro_id: '1',
    status: 'ticking',
    started_at: '2010-04-11 22:10',
    with: ['users/ema']
  },{
    pomodoro_id: '2',
    status: 'squashed',
    started_at: '2015-11-28 18:00',
    with: []
  }
]

describe('Timers reducer', () => {
  
  it('TimersLoaded should return the list of timers with status', () => {
    const state = timers({}, {type: 'TimersLoaded', payload: payload})
    expect(2).toEqual(state.timers.length)
  })

  it('PomodoroStarted should add the pomodoro to the list', () => {
    const initialState = {timers: [], users: [{timerId: '1', username: 'ema'}, {timerId: '2', username: 'gabriele'}]}
    const state = timers(initialState, {type: 'PomodoroStarted', payload: {pomodoroId: '123', sharedWith: ['2'] }})
    expect(1).toEqual(state.timers.length)
    expect(['gabriele']).toEqual(state.timers[0].sharedWith)
  })

  it('PomodoroCompleted should change the status of the pomodoro', () => {
    const initialState = {timers: [{id: '1', startedAt: '2010-04-11 22:20'}], users: [{timerId: '1', username: 'ema'}, {timerId: '2', username: 'gabriele'}]}
    const state = timers(initialState, {type: 'PomodoroCompleted', payload: {pomodoroId: '1' }})
    expect(1).toEqual(state.timers.length)
    expect('completed').toEqual(state.timers[0].status)
  })

  it('PomodoroSquashed should change the status of the pomodoro', () => {
    const initialState = {timers: [{id: '1', startedAt: '2010-04-11 22:20'}], users: [{timerId: '1', username: 'ema'}, {timerId: '2', username: 'gabriele'}]}
    const state = timers(initialState, {type: 'PomodoroSquashed', payload: {pomodoroId: '1' }})
    expect(1).toEqual(state.timers.length)
    expect('squashed').toEqual(state.timers[0].status)
  })

  it('PomodoroVoided should reject the pomodoro', () => {
    const initialState = {timers: [{id: '1', startedAt: '2010-04-11 22:20'}], users: [{timerId: '1', username: 'ema'}, {timerId: '2', username: 'gabriele'}]}
    const state = timers(initialState, {type: 'PomodoroVoided', payload: {pomodoroId: '1' }})
    expect(0).toEqual(state.timers.length)
  })
})