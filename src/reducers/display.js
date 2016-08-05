import dispatcher from '../redux/dispatcher'
import buildReducer from '../redux/buildReducer'
import pomodoroTicker from '../actions/pomodoroTicker'

export default buildReducer({
  'START_TIMER': (state, action) => {
    const timerId = pomodoroTicker.start(state.timer)
    return {timerId: timerId}
  },
  'SQUASH_TIMER': (state, action) => {
    pomodoroTicker.stop(state.timerId)
    return {timerId: null}
  }, 
  'UPDATE_TIMER': (state, action) => ({timer: action.payload.timer})
})

