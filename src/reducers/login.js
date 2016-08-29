import buildReducer from '../redux/buildReducer'

export default buildReducer({
  'WAIT_FOR_LOGIN': (state, action) => {
    return {waiting: true}
  },
  'TimerCreated': (state, action) => {
    console.log('TimerCreated', state, action)
    return {timerId: action.payload.timer_id, redirect: state.loggedIn }
  },
  'LoggedIn': (state, action) => {
    console.log('LoggedIn', state, action)
    return {loggedIn: true, username: action.payload.username, userId: action.payload.user_id, redirect: state.timerId}
  }
})

