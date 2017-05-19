import pomodoroTicker from './pomodoroTicker'
import settings from 'settings'
import * as Action from '../action'

function webSocketActions(data){
  switch(data.event){
  case Action.PomodoroStarted:
    pomodoroTicker.start(settings.duration)
    return { 
      type: Action.PomodoroStarted, 
      payload: {
        timerId: data.timer_id,
        pomodoroId: data.pomodoro_id,
        sharedWith: data.shared_with
      }
    }
  case Action.PomodoroCompleted:
    pomodoroTicker.stop()
    return { 
      type: Action.PomodoroCompleted, 
      payload: {
        timerId: data.timer_id,
        pomodoroId: data.pomodoro_id
      }
    }  
  case Action.PomodoroSquashed:
    pomodoroTicker.stop()
    return { 
      type: Action.PomodoroSquashed, 
      payload: {
        timerId: data.timer_id,
        pomodoroId: data.pomodoro_id
      }
    }
  case Action.PomodoroVoided:
    pomodoroTicker.stop()
    return { 
      type: Action.PomodoroVoided, 
      payload: {
        timerId: data.timer_id,
        pomodoroId: data.pomodoro_id
      }
    }
  case Action.LoggedIn:
    return { 
      type: Action.LoggedIn, 
      payload: {
        loggedIn: true, 
        timerId: data.timer_id,
        username: data.username, 
        userId: data.user_id 
      }
    }
  default: 
    return data
  }
}

export default webSocketActions