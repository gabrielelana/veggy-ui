import sendCommand from '../../sendCommand'
import settings from 'settings'

const timerActions = {
  startPomodoro() {
    sendCommand({command: 'StartPomodoro', duration: settings.duration})
  }
}

export default timerActions