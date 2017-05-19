import buildReducer from '../../../redux/buildReducer'
import R from 'ramda'
import * as Action from '../action'

const userEq = R.curry((id, u) => u.user_id === id)
const mapUser = R.map(u => ({userId: u.user_id, username: u.username, timerId: u.timer_id}))

export default buildReducer({
  [Action.UsersLoaded]: (state, action) => ({ 
    users: R.compose(mapUser, R.reject(userEq(state.userId)))(action.payload) 
  }),
  [Action.SelectedUsersChanged]: (state, action) => {
    return {
      users: state.users.map(u => {
        if (u.userId === action.payload){
          return Object.assign({}, u, {selected: !u.selected}) 
        } 
        return u
      })
    }
  },
  [Action.LoggedIn]: (state, action) => {
    window.localStorage.setItem('veggy', JSON.stringify({username: action.payload.username, timerId: action.payload.timerId, userId: action.payload.userId}))
    return {needLogin: false, username: action.payload.username}
  },
  [Action.WaitForLogin]: () => {
    return { waitingForLogin: true }
  },
})