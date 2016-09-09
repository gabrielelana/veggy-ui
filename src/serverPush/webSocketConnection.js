import dispatcher from '../redux/dispatcher'
import wsActions from './webSocketActions'

let websocket = null
let heartBeat = null

function connect(username) {   
  websocket = new WebSocket('ws://localhost:4000/ws')
  websocket.onopen = (evt) => { 
    setupHertBeat();
    sendLoginName(username)
  }
  websocket.onclose = (evt) => { disconnect() }
  websocket.onmessage = (evt) => { 
    const data = JSON.parse(evt.data)
    if (data.message !== 'pong') {
      console.log('ws', evt.data) 
      if (typeof(wsActions[data.event]) === 'function'){
        wsActions[data.event](data)
      } else {
        console.log('Unknown event', data.event, data)
      }
    }
  }
  websocket.onerror = (evt) => { 
    console.log('error', evt) 
    dispatcher.dispatch({type: 'SOCKET_ERROR', payload: evt.data})
  }
}

function disconnect() {
  clearInterval(heartBeat)
  websocket.close()
}

function setupHertBeat(){
  heartBeat = setInterval(() => websocket.send('ping'), 5000)
}

function sendLoginName(username){
  websocket.send(`login:${username}`)
}

export default {
  connect: connect,
  disconnect: disconnect
}
