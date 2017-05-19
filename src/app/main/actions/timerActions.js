import R from 'ramda'
import sendCommand from '../../sendCommand'
import settings from 'settings'

const timerActions = {
  startPomodoro(timer_id, users, description) {
    const isSelected = u => u.selected
    const select = u => (u.timer_id)
    const selectedUsers = R.pipe(R.filter(isSelected), R.map(select))(users)
    var cmd = {command: 'StartPomodoro', duration: settings.duration, timer_id: timer_id, description: description}
    if (selectedUsers.length > 0){
      cmd.command = 'StartSharedPomodoro'
      cmd.shared_with = selectedUsers
    } 
    sendCommand(cmd)
  },
  squash(timer_id, pomodoro_id, isShared) {
    var cmd = {command: 'SquashPomodoro', timer_id: timer_id, pomodoro_id: pomodoro_id}
    if (isShared){
      cmd.command = 'SquashSharedPomodoro'
    }
    sendCommand(cmd)
  }
}

export default timerActions