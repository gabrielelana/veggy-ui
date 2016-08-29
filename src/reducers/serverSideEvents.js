import buildReducer from '../redux/buildReducer'

export default buildReducer({
  'PomodoroStarted': (state, action) => ({
    startDisabled: true, 
    squashDisabled: false 
  }),
  'PomodoroEnded': (state, action) => ({ 
    startDisabled: false, 
    squashDisabled: true, 
    message: 'Good! Your pomodoro is completed', 
    messageType: 'info' 
  }),
  'CommandFailed': (state, action) => ({ 
    message: `There was an error: ${action.payload.why}`, 
    messageType: 'error' 
  }),
  'LoggedIn':(state, action) => ({isLoggedIn: true, username: action.payload.username, timerId: action.payload.timer_id})
})