import buildReducer from '../../../redux/buildReducer'
import R from 'ramda'
import * as Action from '../action'

const userEq = R.curry((id, u) => u.user_id === id)
const mapUser = R.map(u => ({user_id: u.user_id, username: u.username, timer_id: u.timer_id}))

export default buildReducer({
  [Action.UsersLoaded]: (state, action) => ({ 
    users: R.compose(mapUser, R.reject(userEq(state.user_id)))(action.payload) 
  }),
  [Action.SelectedUsersChanged]: (state, action) => {
    return {
      users: state.users.map(u => {
        if (u.user_id === action.payload){
          return Object.assign({}, u, {selected: !u.selected}) 
        } 
        return u
      })
    }
  },
  [Action.LoggedIn]: (state, action) => {
    window.localStorage.setItem('veggy', JSON.stringify({username: action.payload.username, timer_id: action.payload.timer_id, user_id: action.payload.user_id}))
    return {needLogin: false, username: action.payload.username}
  },
  [Action.WaitForLogin]: () => {
    return { waitingForLogin: true }
  },
})