import xs from 'xstream'
import settings from 'settings'

let heartBeat = null
let connection = null

const wss = xs.create({
  start: listener => {
    connection = new WebSocket(settings.wsHost)
    connection.onopen = (evt) => { 
      heartBeat = setInterval(() => connection.send('ping'), 5000)
    }
    connection.onerror = (err) => {
      listener.error(err)
    }
    connection.onmessage = (evt) => {
      const data = JSON.parse(evt.data)
      if (data.message !== 'pong') {
        listener.next(data)
      }
    }
  },
  stop: () => {
    clearInterval(heartBeat)
    connection.close()
  },
})

function sendCommand(cmd){
  if(connection.readyState !== 1){
    setTimeout(() => sendCommand(cmd), 1000)
  } else {
    connection.send(cmd)
  }
  
}

export default {
  stream: wss,
  sendCommand: sendCommand
}
