import request from 'superagent'
import settings from 'settings'
import R from 'ramda'
import moment from 'moment'
import {startOffLinePomodoro, squashOffLinePomodoro} from './offLineActions'

const offlineCommands = []

addEventListener("online", (e) => {
  offlineCommands
    .filter(cmd => cmd.command === 'StartPomodoro')
    .forEach((cmd, i) => {
      const squashCommand = R.find(c => c.command === 'SquashPomodoro' && c.pomodoro_id === cmd.pomodoro_id)(offlineCommands)
      if (squashCommand){
        sendCommand({command: 'TrackPomodoroSquashed', timer_id: squashCommand.timer_id, started_at: cmd.started_at, squashed_at: squashCommand.squashed_at}).then(res => {})  
      } else {
        const completed_at = moment(cmd.started_at).add(settings.duration, 'ms')
        sendCommand({command: 'TrackPomodoroCompleted', timer_id: cmd.timer_id, started_at: cmd.started_at, completed_at: completed_at}).then(res => {})  
      }
    })
  offlineCommands.length = 0
})

export default function sendCommand(payload) {
  if (navigator.onLine) {
    return request
        .post(`${settings.host}/commands`)
        .set('Content-Type', 'application/json')
        .send(payload)
  }     
  return manageOffLineCommands(payload)
}

function manageOffLineCommands(payload) {
  if (payload.command === 'StartPomodoro') {
    payload.started_at = new Date()
    payload.pomodoro_id = `pomodoro_${offlineCommands.length}`
    offlineCommands.push(payload)
    return startOffLinePomodoro(payload)
  }

  if (payload.command === 'SquashPomodoro') {
    payload.squashed_at = new Date()
    payload.pomodoro_id = `pomodoro_${offlineCommands.length - 1}`
    offlineCommands.push(payload)
    return squashOffLinePomodoro(payload, offlineCommands.length)
  }
}


