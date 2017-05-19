import pomodoroTicker from './pomodoroTicker'
import settings from 'settings'
import * as Action from '../action'

function webSocketActions(data) {
  switch(data.event) {
  case Action.PomodoroStarted:
    pomodoroTicker.start(settings.duration)
    break
  case Action.PomodoroCompleted:
    pomodoroTicker.stop()
    break
  case Action.PomodoroSquashed:
    pomodoroTicker.stop()
    break
  case Action.PomodoroVoided:
    pomodoroTicker.stop()
    break
  default: break
  }
  return { type: data.event, payload: data }
}

export default webSocketActions