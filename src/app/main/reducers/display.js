import buildReducer from '../../../redux/buildReducer'
import settings from 'settings'
import stringifyTime from '../actions/stringifyTime'

export default buildReducer({
  'POMODORO_STARTED': (state, action) => ({ timerId: action.payload.timerId, pomodoroId: action.payload.pomodoroId, ticking: true, isShared: (action.payload.sharedWith && action.payload.sharedWith.length > 0)}),
  'POMODORO_COMPLETED': () => ({time: stringifyTime(settings.duration), ticking: false}),
  'POMODORO_SQUASHED': () => ({time: stringifyTime(settings.duration), ticking: false}),
  'POMODORO_VOIDED': () => ({time: stringifyTime(settings.duration), ticking: false}),
  'UPDATE_TIMER': (state, action) => ({time: stringifyTime(action.payload.time), ticking: true}),
  'RESUME_TIMER': (state, action) => ({
    time: stringifyTime(action.payload.time), 
    timerId: action.payload.timerId,
    pomodoroId: action.payload.pomodoroId,
    ticking: true
  })
})

