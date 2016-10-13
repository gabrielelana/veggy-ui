import sendCommand from '../../sendCommand'
import settings from 'settings'

const timerActions = {
  startPomodoro(timerId) {
    sendCommand({command: 'StartPomodoro', duration: settings.duration, timer_id: timerId})
  },
  squash(timerId, pomodoroId) {
    sendCommand({command: 'SquashPomodoro', timer_id: timerId, pomodoro_id: pomodoroId})
  }
}

export default timerActions