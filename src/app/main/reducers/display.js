import buildReducer from '../../../redux/buildReducer'
import settings from 'settings'
import stringifyTime from '../actions/stringifyTime'
import * as Action from '../action'

export default buildReducer({
  [Action.PomodoroStarted]: (state, action) => ({ timerId: action.payload.timerId, pomodoroId: action.payload.pomodoroId, ticking: true, isShared: (action.payload.sharedWith && action.payload.sharedWith.length > 0)}),
  [Action.PomodoroCompleted]: () => ({time: stringifyTime(settings.duration), ticking: false}),
  [Action.PomodoroSquashed]: () => ({time: stringifyTime(settings.duration), ticking: false}),
  [Action.PomodoroVoided]: () => ({time: stringifyTime(settings.duration), ticking: false}),
  [Action.UpdateTimer]: (state, action) => ({time: stringifyTime(action.payload.time), ticking: true}),
  [Action.ResumeTimer]: (state, action) => ({
    time: stringifyTime(action.payload.time), 
    timerId: action.payload.timerId,
    pomodoroId: action.payload.pomodoroId,
    ticking: true
  })
})

