import buildReducer from '../../../redux/buildReducer'
import * as Action from '../action'

export default buildReducer({
  [Action.PomodoroStarted]: () => ({ startDisabled: true, squashDisabled: false }),
  [Action.ResumeTimer]: () => ({ startDisabled: true, squashDisabled: false }),
  [Action.PomodoroCompleted]: () => ({ startDisabled: false, squashDisabled: true }),
  [Action.PomodoroSquashed]: () => ({ startDisabled: false, squashDisabled: true }),
  [Action.PomodoroVoided]: () => ({ startDisabled: false, squashDisabled: true }),
})