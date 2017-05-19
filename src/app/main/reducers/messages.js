import buildReducer from '../../../redux/buildReducer'
import * as Action from '../action'

export default buildReducer({
  [Action.ApiError]: (state, action) => ({ 
    message: `There was an error calling the API: ${action.payload}`, 
    messageType: 'error' 
  }),
  [Action.PomodoroCompleted]: () => ({ 
    message: 'Good job! Your pomodoro is completed', 
    messageType: 'info' 
  }),
  [Action.PomodoroSquashed]: () => ({ 
    message: 'Ouch! Your pomodoro has been interrupted', 
    messageType: 'warn' 
  }),
  [Action.PomodoroVoided]: () => ({ 
    message: 'There was some problem with your pomorodo. Probably some other user squashed it.', 
    messageType: 'warn' 
  }),
  [Action.CommandFailed]: (state, action) => ({ 
    message: `There was an error: ${action.payload.why}`, 
    messageType: 'error' 
  }),
  [Action.DismissMessage]: () => ({ 
    message: '', 
    messageType: 'none' 
  }),
})