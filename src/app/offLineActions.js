import webSocketActions from '../serverPush/webSocketActions'
import dispatcher from '../redux/dispatcher'
import settings from 'settings'

var timerId = null

export function startOffLinePomodoro(payload){
  dispatcher.push(webSocketActions({event: 'PomodoroStarted', timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with: [] }))
  timerId = setTimeout(() => {
    dispatcher.push(webSocketActions({event: 'PomodoroCompleted', timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with:[] }))
  }, settings.duration)
}

export function squashOffLinePomodoro(payload){
  clearTimeout(timerId)
  dispatcher.push(webSocketActions({event: 'PomodoroSquashed', timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with:[] }))
}



