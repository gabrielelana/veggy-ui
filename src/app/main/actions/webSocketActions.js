import pomodoroTicker from './pomodoroTicker'
import settings from 'settings'

function webSocketActions(data){
  switch(data.event){
  case 'PomodoroStarted':
    pomodoroTicker.start(settings.duration)
    return { 
      type: 'PomodoroStarted', 
      payload: {
        timerId: data.timer_id,
        pomodoroId: data.pomodoro_id,
        sharedWith: data.shared_with
      }
    }
  case 'PomodoroCompleted':
    pomodoroTicker.stop()
    return { 
      type: 'PomodoroCompleted', 
      payload: {
        timerId: data.timer_id,
        pomodoroId: data.pomodoro_id
      }
    }  
  case 'PomodoroSquashed':
    pomodoroTicker.stop()
    return { 
      type: 'PomodoroSquashed', 
      payload: {
        timerId: data.timer_id,
        pomodoroId: data.pomodoro_id
      }
    }
  case 'PomodoroVoided':
    pomodoroTicker.stop()
    return { 
      type: 'PomodoroVoided', 
      payload: {
        timerId: data.timer_id,
        pomodoroId: data.pomodoro_id
      }
    }
  case 'LoggedIn':
    return { 
      type: 'LoggedIn', 
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