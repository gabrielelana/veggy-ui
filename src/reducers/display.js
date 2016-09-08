import dispatcher from '../redux/dispatcher'
import buildReducer from '../redux/buildReducer'


export default buildReducer({
  'POMODORO_STARTED': (state, action) => {
    return { timerId: action.payload.timerId, pomodoroId: action.payload.pomodoroId, ticking: true}
  },
  'POMODORO_ENDED': (state, action) => {
    return {time: '1:00', ticking: false}
  },
  'POMODORO_SQUASHED': (state, action) => {
    return {time: '1:00', ticking: false}
  }, 
  'UPDATE_TIMER': (state, action) => {
    return {time: action.payload.time, ticking: true}
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

