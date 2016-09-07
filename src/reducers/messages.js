import buildReducer from '../redux/buildReducer'

export default buildReducer({
  'API_ERROR': (state, action) => ({ 
    message: `There was an error calling the API: ${action.payload}`, 
    messageType: 'error' 
  }),
  'POMODORO_ENDED': (state, action) => ({ 
    message: 'Good job! Your pomodoro is completed', 
    messageType: 'info' 
  }),
  'POMODORO_SQUASHED': (state, action) => ({ 
    message: 'Ouch! Your pomodoro has been interrupted', 
    messageType: 'warn' 
  }),
  'CommandFailed': (state, action) => ({ 
    message: `There was an error: ${action.payload.why}`, 
    messageType: 'error' 
  })
})