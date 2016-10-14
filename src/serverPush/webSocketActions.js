import pomodoroTicker from '../app/main/actions/pomodoroTicker'
import settings from 'settings'

function webSocketActions(data){
  switch(data.event){
  case 'PomodoroStarted':
    pomodoroTicker.start(settings.duration)
    return { 
      type: 'POMODORO_STARTED', 
      payload: {
        pomodoroId: data.pomodoro_id
      }
    }
  case 'PomodoroCompleted':
    pomodoroTicker.stop()
    return { 
      type: 'POMODORO_COMPLETED', 
      payload: {
        pomodoroId: data.pomodoro_id
      }
    }  
  default: 
    return data
  }
}

export default webSocketActions