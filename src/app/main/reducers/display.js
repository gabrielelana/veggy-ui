import buildReducer from '../../../redux/buildReducer'
import settings from 'settings'
import stringifyTime from '../actions/stringifyTime'

export default buildReducer({
  'PomodoroStarted': (state, action) => ({ timerId: action.payload.timerId, pomodoroId: action.payload.pomodoroId, ticking: true, isShared: (action.payload.sharedWith && action.payload.sharedWith.length > 0)}),
  'PomodoroCompleted': () => ({time: stringifyTime(settings.duration), ticking: false}),
  'PomodoroSquashed': () => ({time: stringifyTime(settings.duration), ticking: false}),
  'PomodoroVoided': () => ({time: stringifyTime(settings.duration), ticking: false}),
  'UpdateTimer': (state, action) => ({time: stringifyTime(action.payload.time), ticking: true}),
  'ResumeTimer': (state, action) => ({
    time: stringifyTime(action.payload.time), 
    timerId: action.payload.timerId,
    pomodoroId: action.payload.pomodoroId,
    ticking: true
  })
})

