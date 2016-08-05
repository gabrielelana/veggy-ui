import dispatcher from '../redux/dispatcher'
import nextTick from './nextTick'

const pomodoroTicker = {
  start(currentTimer){
    const timerId = setInterval(() => {
      const timer = nextTick(currentTimer)
      dispatcher.dispatch({type: 'UPDATE_TIMER', payload: {timer: timer}})
    }, 1000)
    return timerId
  },
  stop(timerId){
    clearInterval(timerId)
  }
}

export default pomodoroTicker