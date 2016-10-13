import buildReducer from '../../../redux/buildReducer'
import settings from 'settings'
import stringifyTime from '../actions/stringifyTime'

export default buildReducer({
  'POMODORO_STARTED': (state, action) => {
    return { timerId: action.payload.timerId, pomodoroId: action.payload.pomodoroId, ticking: true, isShared: (action.payload.sharedWith && action.payload.sharedWith.length > 0)}
  },
  'POMODORO_COMPLETED': () => {
    return {time: stringifyTime(settings.duration), ticking: false}
  },
  'POMODORO_SQUASHED': () => {
    return {time: stringifyTime(settings.duration), ticking: false}
  }, 
  'UPDATE_TIMER': (state, action) => {
    return {time: stringifyTime(action.payload.time), ticking: true}
  },
  'RESUME_TIMER': (state, action) => {
    return {
      time: stringifyTime(action.payload.time), 
      timerId: action.payload.timerId,
      pomodoroId: action.payload.pomodoroId,
      ticking: true
    }
  }
})

