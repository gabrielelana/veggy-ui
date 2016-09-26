import request from 'superagent'
import settings from 'settings'
import {startOffLinePomodoro, squashOffLinePomodoro} from './offLineActions'

var offlineCommands = []

window.addEventListener("online", (e) => {
  offlineCommands = offlineCommands.reduce((acc, c) => {
    console.log('send', c)
    //sendCommand(c)
    return []
  }, [])
})

export default function sendCommand(payload){
  if (window.navigator.onLine) {
    return (request
        .post(`${settings.host}/commands`)
        .set('Content-Type', 'application/json')
        .send(payload))
  }     
  return manageOffLineCommands(payload)
}

function manageOffLineCommands(payload) {

  if (payload.command === 'StartPomodoro'){
    offlineCommands.push(payload)
    return startOffLinePomodoro(offlineCommands.length)
  }

  if (payload.command === 'SquashPomodoro'){
    offlineCommands.push(payload)
    return squashOffLinePomodoro(offlineCommands.length)
  }
}


