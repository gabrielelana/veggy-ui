import buildReducer from '../redux/buildReducer'

export default buildReducer({
  'PomodoroStarted': (state, action) => ({
    pomodoroId: action.payload.pomodoro_id
  }),
  'PomodoroEnded': (state, action) => ({ 
    pomodoroId: action.payload.pomodoro_id,
    message: 'Good! Your pomodoro is completed', 
    messageType: 'info' 
  }),
  'PomodoroSquashed': (state, action) => ({ 
    pomodoroId: action.payload.pomodoro_id,
    message: 'Ouch! Your pomodoro has been interrupted', 
    messageType: 'warn' 
  }),
  'CommandFailed': (state, action) => ({ 
    message: `There was an error: ${action.payload.why}`, 
    messageType: 'error' 
  }),
  'LoggedIn':(state, action) => ({isLoggedIn: true, username: action.payload.username, timerId: action.payload.timer_id})
})