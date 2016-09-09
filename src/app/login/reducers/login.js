import buildReducer from '../../../redux/buildReducer'

export default buildReducer({
  'WAIT_FOR_LOGIN': (state, action) => {
    return {waiting: true}
  },
  'LOGGED_IN': (state, action) => {
    console.log('LOGGEDIN')
    return {
      loggedIn: true, 
      timerId: action.payload.timerId,
      username: action.payload.username, 
      userId: action.payload.userId 
    }
  }
})

