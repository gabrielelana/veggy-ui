import buildReducer from '../../../redux/buildReducer'

export default buildReducer({
  'API_ERROR': (state, action) => ({ 
    message: `There was an error calling the API: ${action.payload}`, 
    messageType: 'error' 
  }),
  'POMODORO_COMPLETED': () => ({ 
    message: 'Good job! Your pomodoro is completed', 
    messageType: 'info' 
  }),
  'CommandFailed': (state, action) => ({ 
    message: `There was an error: ${action.payload.why}`, 
    messageType: 'error' 
  }),
  'DISMISS_MESSAGE': () => ({ 
    message: '', 
    messageType: 'none' 
  }),
})