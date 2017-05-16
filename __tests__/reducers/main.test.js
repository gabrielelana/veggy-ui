var main = require('../../src/app/main/reducers/main')

describe('Main reducer', () => {
  
  test('INIT should setup the state', () => {
    const state = main({}, {type: 'INIT', payload: {userId: 'users/ema', username: 'ema', timerId: '123'}})
    expect('users/ema').toEqual(state.userId)
    expect('ema').toEqual(state.username)
    expect('123').toEqual(state.timerId)
    expect(state.isLoggedIn).toBe(true)
  })

})