import dispatcher from '../../../redux/dispatcher'
import nextTick from './nextTick'
import {UpdateTimer} from '../action'

let timer_id = null

const pomodoroTicker = {
  start(startingTime){
    let currentTime = startingTime
    timer_id = setInterval(() => {
      currentTime = nextTick(currentTime)
      dispatcher.dispatch({type: UpdateTimer, payload: {time: currentTime}})
    }, 1000)
  },
  stop(){
    clearInterval(timer_id)
    timer_id = null
  }
}

export default pomodoroTicker