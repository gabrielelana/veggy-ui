import pomodoroTicker from '../app/main/actions/pomodoroTicker'
import settings from 'settings'

function webSocketActions(data){
  switch(data.event){
  case 'PomodoroStarted':
    pomodoroTicker.start(settings.duration)
    return { 
      type: 'POMODORO_STARTED', 
      payload: {
        timerId: data.timer_id,
        pomodoroId: data.pomodoro_id,
        sharedWith: data.shared_with
      }
    }
  case 'PomodoroCompleted':
    pomodoroTicker.stop()
    return { 
      type: 'POMODORO_COMPLETED', 
      payload: {
        timerId: data.timer_id,
        pomodoroId: data.pomodoro_id
      }
    }  
  case 'PomodoroSquashed':
    pomodoroTicker.stop()
    return { 
      type: 'POMODORO_SQUASHED', 
      payload: {
        timerId: data.timer_id,
        pomodoroId: data.pomodoro_id
      }
    }
  case 'PomodoroVoided':
    pomodoroTicker.stop()
    return { 
      type: 'POMODORO_VOIDED', 
      payload: {
        timerId: data.timer_id,
        pomodoroId: data.pomodoro_id
      }
    }
  case 'LoggedIn':
    return { 
      type: 'LOGGED_IN', 
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