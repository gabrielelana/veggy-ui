import webSocketActions from '../serverPush/webSocketActions'
import dispatcher from '../redux/dispatcher'
import settings from 'settings'

export function startOffLinePomodoro(payload){
  return new Promise(resolve => {
    dispatcher.push(webSocketActions({event: 'PomodoroStarted', timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with: [] }))
    setTimeout(() => {
      dispatcher.push(webSocketActions({event: 'PomodoroCompleted', timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with:[] }))
      resolve()
    }, settings.duration)
  })
}

export function squashOffLinePomodoro(payload){
  return new Promise(resolve => {
    dispatcher.push(webSocketActions({event: 'PomodoroSquashed', timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with:[] }))
    resolve()
  })
}



