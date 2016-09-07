import dispatcher from '../redux/dispatcher'
import buildReducer from '../redux/buildReducer'


export default buildReducer({
  'POMODORO_STARTED': (state, action) => {
    return {clientTimerId: action.payload.clientTimerId}
  },
  'POMODORO_ENDED': (state, action) => {
    return {clientTimerId: null, timer: '1:00'}
  },
  'POMODORO_SQUASHED': (state, action) => {
    return {clientTimerId: null}
  }, 
  'UPDATE_TIMER': (state, action) => {
    return {timer: action.payload.timer}
  },
  'RESUME_TIMER': (state, action) => {
    return {
      timer: action.payload.timer, 
      timerId: action.payload.timerId,
      pomodoroId: action.payload.pomodoroId,
      startDisabled: true, 
      squashDisabled: false,
      clientTimerId: action.payload.clientTimerId
    }
  }
})

