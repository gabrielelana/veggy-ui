import request from 'superagent'
import R from 'ramda'
import {hashHistory} from 'react-router'
import moment from 'moment'
import dispatcher from '../../../redux/dispatcher'
import ws from '../../../serverPush/webSocketConnection'
import pomodoroTicker from './pomodoroTicker'
import sendCommand from '../../sendCommand'
import settings from 'settings'

const timerActions = {
  startPomodoro(timerId, users) {
    const isSelected = u => u.selected
    const select = u => (u.timerId)
    const selectedUsers = R.pipe(R.filter(isSelected), R.map(select))(users)
    var cmd = {command: 'StartPomodoro', duration: settings.duration, timer_id: timerId}
    if (selectedUsers.length > 0){
      cmd.command = 'StartSharedPomodoro'
      cmd.shared_with = selectedUsers
    } 
    console.log('CMD', cmd)
    sendCommand(cmd)
      .then(res => {})
      .catch(err => dispatcher.push({type: 'API_ERROR', payload: err}))    
    
  },
  squash(timerId, pomodoroId) {
    sendCommand({command: 'SquashPomodoro', timer_id: timerId, pomodoro_id: pomodoroId})
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