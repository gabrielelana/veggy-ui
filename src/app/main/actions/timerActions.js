import sendCommand from '../../sendCommand'
import settings from 'settings'

const timerActions = {
  startPomodoro() {
    sendCommand({command: 'StartPomodoro', duration: settings.duration})
  },
  squash(pomodoroId) {
    sendCommand({command: 'SquashPomodoro', pomodoro_id: pomodoroId})
  }
}

export default timerActions