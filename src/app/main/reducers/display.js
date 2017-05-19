import buildReducer from '../../../redux/buildReducer'
import settings from 'settings'
import stringifyTime from '../actions/stringifyTime'
import * as Action from '../action'

export default buildReducer({
  [Action.PomodoroStarted]: (state, action) => ({ timer_id: action.payload.timer_id, pomodoro_id: action.payload.pomodoro_id, ticking: true, is_shared: (action.payload.shared_with && action.payload.shared_with.length > 0)}),
  [Action.PomodoroCompleted]: () => ({time: stringifyTime(settings.duration), ticking: false}),
  [Action.PomodoroSquashed]: () => ({time: stringifyTime(settings.duration), ticking: false}),
  [Action.PomodoroVoided]: () => ({time: stringifyTime(settings.duration), ticking: false}),
  [Action.UpdateTimer]: (state, action) => ({time: stringifyTime(action.payload.time), ticking: true}),
  [Action.ResumeTimer]: (state, action) => ({
    time: stringifyTime(action.payload.time), 
    timer_id: action.payload.timer_id,
    pomodoro_id: action.payload.pomodoro_id,
    ticking: true
  })
})

