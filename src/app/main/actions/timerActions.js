import R from 'ramda'
import dispatcher from '../../../redux/dispatcher'
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
    sendCommand(cmd)
      .then(res => {})
      .catch(err => dispatcher.push({type: 'API_ERROR', payload: err}))
  },
  squash(timerId, pomodoroId, isShared) {
    var cmd = {command: 'SquashPomodoro', timer_id: timerId, pomodoro_id: pomodoroId}
    if (isShared){
      cmd.command = 'SquashSharedPomodoro'
    }
    sendCommand(cmd)
      .then(res => {})  
      .catch(err => dispatcher.push({type: 'API_ERROR', payload: err}))
  }
}

export default timerActions