import webSocketActions from './main/actions/webSocketActions'
import actionStream from '../redux/actionStream'
import settings from 'settings'

var timerId = null

export function startOffLinePomodoro(payload){
  actionStream.push(webSocketActions({event: 'PomodoroStarted', timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with: [] }))
  timerId = setTimeout(() => {
    actionStream.push(webSocketActions({event: 'PomodoroCompleted', timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with:[] }))
    timerId = null
  }, settings.duration)
}

export function squashOffLinePomodoro(payload){
  clearTimeout(timerId)
  timerId = null
  actionStream.push(webSocketActions({event: 'PomodoroSquashed', timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with:[] }))
}

export function isTicking(){
  return timerId !== null
}



