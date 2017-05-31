import pomodoroTicker from './pomodoroTicker'
import dispatcher from '../../../redux/dispatcher'
import settings from 'settings'
import * as Action from '../action'
import {getUsers, getTimers, getTags} from './loaders'

function webSocketActions(data) {
  const user = {username: data.username, timer_id: data.timer_id, user_id: data.user_id}
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
    window.localStorage.setItem('veggy', JSON.stringify(user))
    Promise.all([ getUsers(), getTimers(user), getTags(user)]).then(() => dispatcher.dispatch({type: Action.Init, payload: user}))      
    break
  default: break
  }
  return { type: data.event, payload: data }
}

export default webSocketActions