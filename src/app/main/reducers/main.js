import buildReducer from '../../../redux/buildReducer'
import * as Action from '../action'

export default buildReducer({
  [Action.Init]: (state, action) => ({
    user_id: action.payload.user_id,
    username: action.payload.username,
    timer_id: action.payload.timer_id
  }),
  [Action.NeedLogin]: () => ({need_login: true}),
  [Action.StartRequested]: () => ({ need_description: true}),
  [Action.StartCanceled]: () => ({ need_description: false }),
  [Action.PomodoroStarted]: () => ({ need_description: false }),
})

