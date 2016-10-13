import buildReducer from '../../../redux/buildReducer'
import R from 'ramda'

const userEq = R.curry((id, u) => u.user_id === id)
const mapUser = R.map(u => ({userId: u.user_id, username: u.username, timerId: u.timer_id}))

export default buildReducer({
  'USERS_LOADED': (state, action) => ({ 
    users: R.compose(mapUser, R.reject(userEq(state.userId)))(action.payload) 
  })
})