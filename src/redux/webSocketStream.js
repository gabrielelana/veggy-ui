import wsa from '../app/main/actions/webSocketActions'
import settings from 'settings'
import dispatcher from './dispatcher'

let heartBeat = null
let connection = null

function connect(){
  connection = new WebSocket(settings.wsHost)
  connection.onopen = () => { 
    heartBeat = setInterval(() => connection.send('ping'), 5000)
  }
  connection.onerror = (err) => {
    console.log('websocket error', err)
    // TODO
  }
  connection.onmessage = (evt) => {
    const data = JSON.parse(evt.data)
    if (data.message !== 'pong' && data.message !== 'ok') {
      dispatcher.dispatch(wsa(data))
    }
  }
}

function disconnect() {
  clearInterval(heartBeat)
  connection.close()
}


function sendCommand(cmd){
  if(connection.readyState !== 1){
    setTimeout(() => sendCommand(cmd), 1000)
  } else {
    connection.send(cmd)
  }
}

export default {
  connect: connect,
  disconnect: disconnect,
  sendCommand: sendCommand
}