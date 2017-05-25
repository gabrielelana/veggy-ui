var main = require('../../src/app/main/reducers/main')
import * as Action from '../../src/app/main/action'

describe('Main reducer', () => {
  
  test('Init should setup the state', () => {
    const state = main({}, {type: Action.Init, payload: {user_id: 'users/ema', username: 'ema', timer_id: '123'}})
    expect(state.user_id).toEqual('users/ema')
    expect(state.username).toEqual('ema')
    expect(state.timer_id).toEqual('123')
  })

  test('NeedLogin should set need_login to true', () => {
    const state = main({}, {type: Action.NeedLogin, payload: {}})
    expect(state.need_login).toBeTruthy()
  })
  
  test('StartRequested should set need_description to true', () => {
    const state = main({}, {type: Action.StartRequested, payload: {}})
    expect(state.need_description).toBeTruthy()
  })

  test('StartCanceled should set need_description to true', () => {
    const state = main({need_description: true}, {type: Action.StartCanceled, payload: {}})
    expect(state.need_description).toBeFalsy()
  })

  test('PomodoroStarted should set need_description to true', () => {
    const state = main({need_description: true}, {type: Action.PomodoroStarted, payload: {}})
    expect(state.need_description).toBeFalsy()
  })

})