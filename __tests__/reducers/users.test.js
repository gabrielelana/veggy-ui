import R from 'ramda'
import users from '../../src/app/main/reducers/users'
import * as Action from '../../src/app/main/action'

describe('Users reducer', () => {
   it('UsersLoaded should return the list without current user', () => {
    const initialState = {user_id: '1'}
    const state = users(initialState, {type: Action.UsersLoaded, payload: [
      {user_id: '1', name: 'ema'},
      {user_id: '2', name: 'ale'},
      {user_id: '3', name: 'ste'},
      {user_id: '4', name: 'mel'},
    ]})
    expect(3).toEqual(state.users.length)
    expect(state.users.find(u => u.user_id === '1')).not.toBeDefined()
  })

  it('SelectedUsersChanged should change selected attribute', () => {
    const initialState = {
      users: [
        {user_id: '1', name: 'ema'},
        {user_id: '2', name: 'ale'},
        {user_id: '3', name: 'ste'},
        {user_id: '4', name: 'mel'}
      ]}
    const state = users(initialState, {type: Action.SelectedUsersChanged, payload: '2'})
    const user2 = state.users.find(u => u.user_id === '2')
    expect(user2.selected).toBeTruthy()
  })

  it('LoggedIn should set need_login to false and return the username', () => {
    const state = users({need_login: true, username: ''}, {type: Action.LoggedIn, payload: {username: 'test-user'}})
    expect(state.need_login).toBeFalsy()
    expect(state.username).toBe('test-user')
  })

  it('WaitForLogin should set waiting_for_login to true', () => {
    const state = users({}, {type: Action.WaitForLogin})
    expect(state.waiting_for_login).toBeTruthy()
  })

})