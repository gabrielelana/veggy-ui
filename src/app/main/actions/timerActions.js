import sendCommand from '../../sendCommand'
import settings from 'settings'

const timerActions = {
  startPomodoro(timerId) {
    sendCommand({command: 'StartPomodoro', duration: settings.duration, timer_id: timerId})
  }
}

export default timerActions