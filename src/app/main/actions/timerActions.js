import R from 'ramda'
import sendCommand from '../../sendCommand'
import settings from 'settings'

const timerActions = {
  startPomodoro(timerId, users, description) {
    const isSelected = u => u.selected
    const select = u => (u.timerId)
    const selectedUsers = R.pipe(R.filter(isSelected), R.map(select))(users)
    var cmd = {command: 'StartPomodoro', duration: settings.duration, timer_id: timerId, description: description}
    if (selectedUsers.length > 0){
      cmd.command = 'StartSharedPomodoro'
      cmd.shared_with = selectedUsers
    } 
    sendCommand(cmd)
  },
  squash(timerId, pomodoroId, isShared) {
    var cmd = {command: 'SquashPomodoro', timer_id: timerId, pomodoro_id: pomodoroId}
    if (isShared){
      cmd.command = 'SquashSharedPomodoro'
    }
    sendCommand(cmd)
  }
}

export default timerActions