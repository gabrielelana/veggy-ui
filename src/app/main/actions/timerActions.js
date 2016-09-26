import request from 'superagent'
import {hashHistory} from 'react-router'
import moment from 'moment'
import dispatcher from '../../../redux/dispatcher'
import ws from '../../../serverPush/webSocketConnection'
import pomodoroTicker from './pomodoroTicker'
import sendCommand from '../../sendCommand'
import settings from 'settings'

const timerActions = {
  startPomodoro(timerId) {
    sendCommand({command: 'StartPomodoro', duration: settings.duration, timer_id: timerId})
      .then(res => {})
      .catch(err => dispatcher.push({type: 'API_ERROR', payload: err}))
  },
  squash(timerId, pomodoroId) {
    sendCommand({command: 'SquashPomodoro', timer_id: timerId, pomodoro_id: pomodoroId})
      .then(res => {})  
      .catch(err => dispatcher.push({type: 'API_ERROR', payload: err}))

  },
  startSharedPomodoro(timerId, users) {
    sendCommand({command: 'StartSharedPomodoro', timer_id: timerId, duration: settings.duration, shared_with: users})
      .then(res => {})  
      .catch(err => dispatcher.push({type: 'API_ERROR', payload: err}))
  },
  squashSharedPomodoro(timerId) {
    sendCommand({command: 'SquashSharedPomodoro', timer_id: timerId})
      .then(res => {})  
      .catch(err => dispatcher.push({type: 'API_ERROR', payload: err}))
  }
}

export default timerActions