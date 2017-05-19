var main = require('../../src/app/main/reducers/main')
import * as Action from '../../src/app/main/action'

describe('Main reducer', () => {
  
  test('Init should setup the state', () => {
    const state = main({}, {type: Action.Init, payload: {userId: 'users/ema', username: 'ema', timerId: '123'}})
    expect('users/ema').toEqual(state.userId)
    expect('ema').toEqual(state.username)
    expect('123').toEqual(state.timerId)
    expect(state.isLoggedIn).toBe(true)
  })

})