import buildReducer from '../../../redux/buildReducer'
import * as Action from '../action'

export default buildReducer({
  [Action.ApiError]: (state, action) => ({ 
    message: `There was an error calling the API: ${action.payload}`, 
    message_type: 'error' 
  }),
  [Action.PomodoroCompleted]: () => ({ 
    message: 'Good job! Your pomodoro is completed', 
    message_type: 'info' 
  }),
  [Action.PomodoroSquashed]: () => ({ 
    message: 'Ouch! Your pomodoro has been interrupted', 
    message_type: 'warn' 
  }),
  [Action.PomodoroVoided]: () => ({ 
    message: 'There was some problem with your pomorodo. Probably some other user squashed it.', 
    message_type: 'warn' 
  }),
  [Action.CommandFailed]: (state, action) => ({ 
    message: `There was an error: ${action.payload.why}`, 
    message_type: 'error' 
  }),
  [Action.DismissMessage]: () => ({ 
    message: '', 
    message_type: 'none' 
  }),
})