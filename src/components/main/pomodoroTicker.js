import dispatcher from '../../redux/dispatcher'
import nextTick from './nextTick'

const pomodoroTicker = {
  start(startingTimer){
    var currentTimer = startingTimer
    const timerId = setInterval(() => {
      currentTimer = nextTick(currentTimer)
      dispatcher.dispatch({type: 'UPDATE_TIMER', payload: {timer: currentTimer}})
    }, 1000)
    console.log('started', timerId)
    return timerId
  },
  stop(timerId){
    console.log('stopping', timerId)
    clearInterval(timerId)
  }
}

export default pomodoroTicker