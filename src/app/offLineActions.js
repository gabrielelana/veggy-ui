import webSocketActions from '../serverPush/webSocketActions'
import dispatcher from '../redux/dispatcher'
import settings from 'settings'

export function squashOffLinePomodoro(counter){
  return new Promise(resolve => {
    dispatcher.push(webSocketActions({event: 'PomodoroSquashed', timer_id: `timer_${counter}`, pomodoro_id: `pomodoro_${counter}`, shared_with: []}))
    resolve()
  })
}

export function startOffLinePomodoro(counter){
  return new Promise(resolve => {
    dispatcher.push(webSocketActions({event: 'PomodoroStarted', timer_id: `timer_${counter}`, pomodoro_id: `pomodoro_${counter}`, shared_with: []}))
    setTimeout(() => {
      dispatcher.push(webSocketActions({event: 'PomodoroCompleted', timer_id: `timer_${counter}`, pomodoro_id: `pomodoro_${counter}`}))
      resolve()
    }, settings.duration)
  })
}


