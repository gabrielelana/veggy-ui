import dispatcher from '../redux/dispatcher'
var websocket = null
var hearBeat = null

function connect(username) {   
  websocket = new WebSocket('ws://localhost:4000/ws')
  websocket.onopen = (evt) => { 
    setupHertBeat();
    sendLoginName(username)
    // TODO: inviare username ws.send('login:username')
  }
  websocket.onclose = (evt) => { disconnect() }
  websocket.onmessage = (evt) => { 
    if (evt.data !== 'pong') {
      console.log('ws-message', evt) 
      var data = evt.data
      try{
        data = JSON.parse(data)
      } catch(err) {
        console.log('data is not json', data, err)
      }
      dispatcher.dispatch({type: data.event, payload: data})
    }
  }
  websocket.onerror = (evt) => { 
    console.log('error', evt) 
    dispatcher.dispatch({type: 'SOCKET_ERROR', payload: evt.data})
  }
}

function disconnect() {
  clearInterval(hearBeat)
  websocket.close()
}

function setupHertBeat(){
  hearBeat = setInterval(() => websocket.send('ping'), 5000)
}

function sendLoginName(username){
  websocket.send(`login:${username}`)
}

export default {
  connect: connect,
  disconnect: disconnect
}
