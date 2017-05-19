var main = require('../../src/app/main/reducers/main')
import * as Action from '../../src/app/main/action'

describe('Main reducer', () => {
  
  test('Init should setup the state', () => {
    const state = main({}, {type: Action.Init, payload: {user_id: 'users/ema', username: 'ema', timer_id: '123'}})
    expect('users/ema').toEqual(state.user_id)
    expect('ema').toEqual(state.username)
    expect('123').toEqual(state.timer_id)
    expect(state.isLoggedIn).toBe(true)
  })

})