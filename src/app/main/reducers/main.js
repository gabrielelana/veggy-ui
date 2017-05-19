import buildReducer from '../../../redux/buildReducer'
import * as Action from '../action'

export default buildReducer({
  [Action.Init]: (state, action) => ({
    user_id: action.payload.user_id,
    username: action.payload.username,
    isLoggedIn: true,
    timer_id: action.payload.timer_id
  }),
  [Action.NeedLogin]: () => ({needLogin: true}),
  [Action.StartRequested]: () => ({ needDescription: true}),
  [Action.StartCanceled]: () => ({ needDescription: false }),
  [Action.PomodoroStarted]: () => ({ needDescription: false }),
})

