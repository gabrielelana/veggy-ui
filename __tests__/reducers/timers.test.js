var timers = require('../../src/app/main/reducers/timers')
import * as Action from '../../src/app/main/action'

const payload = [
  {
    pomodoro_id: '1',
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
    const state = timers({}, {type: Action.TimersLoaded, payload: payload})
    expect(2).toEqual(state.timers.length)
  })

  it('PomodoroStarted should add the pomodoro to the list', () => {
    const initialState = {timers: [], users: [{timer_id: '1', username: 'ema'}, {timer_id: '2', username: 'gabriele'}]}
    const state = timers(initialState, {type: Action.PomodoroStarted, payload: {pomodoro_id: '123', shared_with: ['2'] }})
    expect(1).toEqual(state.timers.length)
    expect(['gabriele']).toEqual(state.timers[0].shared_with)
  })

  it('PomodoroCompleted should change the status of the pomodoro', () => {
    const initialState = {timers: [{id: '1', startedAt: '2010-04-11 22:20'}], users: [{timer_id: '1', username: 'ema'}, {timer_id: '2', username: 'gabriele'}]}
    const state = timers(initialState, {type: Action.PomodoroCompleted, payload: {pomodoro_id: '1' }})
    expect(1).toEqual(state.timers.length)
    expect('completed').toEqual(state.timers[0].status)
  })

  it('PomodoroSquashed should change the status of the pomodoro', () => {
    const initialState = {timers: [{id: '1', startedAt: '2010-04-11 22:20'}], users: [{timer_id: '1', username: 'ema'}, {timer_id: '2', username: 'gabriele'}]}
    const state = timers(initialState, {type: Action.PomodoroSquashed, payload: {pomodoro_id: '1' }})
    expect(1).toEqual(state.timers.length)
    expect('squashed').toEqual(state.timers[0].status)
  })

  it('PomodoroVoided should reject the pomodoro', () => {
    const initialState = {timers: [{id: '1', startedAt: '2010-04-11 22:20'}], users: [{timer_id: '1', username: 'ema'}, {timer_id: '2', username: 'gabriele'}]}
    const state = timers(initialState, {type: Action.PomodoroVoided, payload: {pomodoro_id: '1' }})
    expect(0).toEqual(state.timers.length)
  })
})