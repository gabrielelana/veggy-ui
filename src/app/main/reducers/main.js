import buildReducer from '../../../redux/buildReducer'
import * as Action from '../action'

export default buildReducer({
  [Action.Init]: (state, action) => ({
    userId: action.payload.userId,
    username: action.payload.username,
    isLoggedIn: true,
    timerId: action.payload.timerId
  }),
  [Action.NeedLogin]: () => ({needLogin: true}),
  [Action.StartRequested]: () => ({ needDescription: true}),
  [Action.StartCanceled]: () => ({ needDescription: false }),
  [Action.PomodoroStarted]: () => ({ needDescription: false }),
})

