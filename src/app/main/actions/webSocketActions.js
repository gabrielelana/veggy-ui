import pomodoroTicker from './pomodoroTicker'
import settings from 'settings'
import * as Action from '../action'
import resumeActions from './resumeActions'

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
  case Action.LoggedIn:
    window.localStorage.setItem('veggy', JSON.stringify({username: data.username, timer_id: data.timer_id, user_id: data.user_id}))
    resumeActions.wireup()
    break
  default: break
  }
  return { type: data.event, payload: data }
}

export default webSocketActions