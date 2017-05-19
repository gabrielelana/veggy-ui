import buildReducer from '../../../redux/buildReducer'

export default buildReducer({
  'ApiError': (state, action) => ({ 
    message: `There was an error calling the API: ${action.payload}`, 
    messageType: 'error' 
  }),
  'PomodoroCompleted': () => ({ 
    message: 'Good job! Your pomodoro is completed', 
    messageType: 'info' 
  }),
  'PomodoroSquashed': () => ({ 
    message: 'Ouch! Your pomodoro has been interrupted', 
    messageType: 'warn' 
  }),
  'PomodoroVoided': () => ({ 
    message: 'There was some problem with your pomorodo. Probably some other user squashed it.', 
    messageType: 'warn' 
  }),
  'CommandFailed': (state, action) => ({ 
    message: `There was an error: ${action.payload.why}`, 
    messageType: 'error' 
  }),
  'DismissMessage': () => ({ 
    message: '', 
    messageType: 'none' 
  }),
})