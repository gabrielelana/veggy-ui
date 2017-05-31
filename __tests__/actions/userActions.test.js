import usersActions from '../../src/app/main/actions/usersActions'
import dispatcher from '../../src/redux/dispatcher'
import {SelectedUsersChanged} from '../../src/app/main/action'

describe('usersActions', () => {
  test('SelectedUsersChanged should dispatch an action', done => {
    dispatcher.register(action => {
      expect(action.type).toBe('SelectedUsersChanged')
      expect(action.payload.username).toBe('foo')
      done()
    })

    usersActions.toggleSelectedUsers({username: 'foo'})

  })
})
