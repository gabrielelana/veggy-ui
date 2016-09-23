import buildReducer from '../../../redux/buildReducer'
import settings from 'settings'
import stringifyTime from '../actions/stringifyTime'

export default buildReducer({
  'POMODORO_STARTED': (state, action) => {
    return { timerId: action.payload.timerId, pomodoroId: action.payload.pomodoroId, ticking: true}
  },
  'POMODORO_COMPLETED': (state, action) => {
    return {time: stringifyTime(settings.duration), ticking: false}
  },
  'POMODORO_SQUASHED': (state, action) => {
    return {time: stringifyTime(settings.duration), ticking: false}
  }, 
  'POMODORO_VOIDED': (state, action) => {
    return {time: stringifyTime(settings.duration), ticking: false}
  }, 
  'UPDATE_TIMER': (state, action) => {
    return {time: stringifyTime(action.payload.time), ticking: true}
  },
  'RESUME_TIMER': (state, action) => {
    return {
      timer: action.payload.timer, 
      timerId: action.payload.timerId,
      pomodoroId: action.payload.pomodoroId,
      startDisabled: true, 
      squashDisabled: false,
      ticking: true
    }
  }
})

