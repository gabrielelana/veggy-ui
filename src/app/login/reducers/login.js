import buildReducer from '../../../redux/buildReducer'

export default buildReducer({
  'WAIT_FOR_LOGIN': (state, action) => {
    return {waiting: true}
  },
  'LoggedIn': (state, action) => {
    console.log('LOGGEDIN')
    return {
      loggedIn: true, 
      timerId: action.payload.timer_id,
      username: action.payload.username, 
      userId: action.payload.user_id 
    }
  }
})

