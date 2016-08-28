import dispatcher from '../redux/dispatcher'
import buildReducer from '../redux/buildReducer'
import pomodoroTicker from '../components/main/pomodoroTicker'

export default buildReducer({
  'PomodoroStarted': (state, action) => {
    // TODO: questo e' un side-effect (meglio spostarlo da qui)
    const timerId = pomodoroTicker.start(state.timer)
    return {timerId: timerId}
  },
  'PomodoroEnded': (state, action) => {
    // TODO: questo e' un side-effect (meglio spostarlo da qui)
    pomodoroTicker.stop(state.timerId)
    return {timerId: null, timer: '1:00'}
  },
  'SQUASH_TIMER': (state, action) => {
    pomodoroTicker.stop(state.timerId)
    return {timerId: null}
  }, 
  'UPDATE_TIMER': (state, action) => {
    console.log('UPDATE_TIMER', action.payload.timer)
    return {timer: action.payload.timer}
  }
})

