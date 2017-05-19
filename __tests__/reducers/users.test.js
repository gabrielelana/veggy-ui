import R from 'ramda'
import users from '../../src/app/main/reducers/users'
import * as Action from '../../src/app/main/action'

describe('Users reducer', () => {
   it('UsersLoaded should return the list without current user', () => {
    const initialState = {userId: '1'}
    const state = users(initialState, {type: Action.UsersLoaded, payload: [
      {user_id: '1', name: 'ema'},
      {user_id: '2', name: 'ale'},
      {user_id: '3', name: 'ste'},
      {user_id: '4', name: 'mel'},
    ]})
    expect(3).toEqual(state.users.length)
    expect(state.users.find(u => u.userId === '1')).not.toBeDefined()
  })

  it('SelectedUsersChanged should change selected attribute', () => {
    const initialState = {
      users: [
        {userId: '1', name: 'ema'},
        {userId: '2', name: 'ale'},
        {userId: '3', name: 'ste'},
        {userId: '4', name: 'mel'}
      ]}
    const state = users(initialState, {type: Action.SelectedUsersChanged, payload: '2'})
    const user2 = state.users.find(u => u.userId === '2')
    expect(user2.selected).toBe(true)
  })

})