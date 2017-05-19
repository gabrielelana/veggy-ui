import R from 'ramda'
import sendCommand from '../../sendCommand'
import settings from 'settings'

const selected = u => u.selected
const project_timer_id = u => (u.timer_id)

const timerActions = {
  startPomodoro(timer_id, users, description) {
    const selectedUsers = R.pipe(R.filter(selected), R.map(project_timer_id))(users)
    var cmd = { command: 'StartPomodoro', duration: settings.duration, timer_id: timer_id, description: description }
    if (selectedUsers.length > 0) {
      cmd.command = 'StartSharedPomodoro'
      cmd.shared_with = selectedUsers
    } 
    sendCommand(cmd)
  },
  squash(timer_id, pomodoro_id, is_shared) {
    var cmd = { command: 'SquashPomodoro', timer_id: timer_id, pomodoro_id: pomodoro_id }
    if (is_shared) {
      cmd.command = 'SquashSharedPomodoro'
    }
    sendCommand(cmd)
  }
}

export default timerActions