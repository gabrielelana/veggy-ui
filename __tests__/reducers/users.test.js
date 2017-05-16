var R = require('ramda')
var users = require('../../src/app/main/reducers/users')


describe('Users reducer', () => {
   it('USERS_LOADED should return the list without current user', () => {
    const initialState = {userId: '1'}
    const state = users(initialState, {type: 'USERS_LOADED', payload: [
      {user_id: '1', name: 'ema'},
      {user_id: '2', name: 'ale'},
      {user_id: '3', name: 'ste'},
      {user_id: '4', name: 'mel'},
    ]})
    expect(3).toEqual(state.users.length)
    expect(state.users.find(u => u.userId === '1')).not.toBeDefined()
  })

  it('SELECTED_USERS_CHANGED should change selected attribute', () => {
    const initialState = {
      users: [
        {userId: '1', name: 'ema'},
        {userId: '2', name: 'ale'},
        {userId: '3', name: 'ste'},
        {userId: '4', name: 'mel'}
      ]}
    const state = users(initialState, {type: 'SELECTED_USERS_CHANGED', payload: '2'})
    const user2 = state.users.find(u => u.userId === '2')
    expect(user2.selected).toBe(true)
  })

})