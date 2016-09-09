import request from 'superagent'
import {hashHistory} from 'react-router'
import moment from 'moment'
import dispatcher from '../../../redux/dispatcher'
import ws from '../../../serverPush/webSocketConnection'
import pomodoroTicker from './pomodoroTicker'
import sendCommand from '../../sendCommand'

const timerActions = {
  startPomodoro(timerId) {
    sendCommand({command: 'StartPomodoro', duration: 6 * 10 * 1000, timer_id: timerId})
      .then(res => {})
      .catch(err => dispatcher.dispatch({type: 'API_ERROR', payload: err}))
  },
  squash(timerId, pomodoroId){
    sendCommand({command: 'SquashPomodoro', timer_id: timerId, pomodoro_id: pomodoroId})
      .then(res => {})  
      .catch(err => dispatcher.dispatch({type: 'API_ERROR', payload: err}))

  }
}

export default timerActions