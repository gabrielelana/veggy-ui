import request from 'superagent'
import {hashHistory} from 'react-router'
import uuid from 'uuid'
import settings from 'settings'
import dispatcher from '../../../redux/dispatcher'
import ws from '../../../serverPush/webSocketConnection'

const clientId = uuid.v1()

const loginActions = {
  connect(){
    console.log('connect', clientId)
    ws.sendCommand(`login:${clientId}`)
  },
  login(username) {
    // TODO: usare la funzione sendCommand
    request
      .post(`${settings.host}/commands`)
      .set('Content-Type', 'application/json')
      .send({command: 'Login', username: username, client_id: clientId})
      .then(res => {
        dispatcher.push({type: 'WAIT_FOR_LOGIN'})
      })
      .catch(err => {
        dispatcher.push({type: 'API_ERROR', payload: err})
      })
    
  },
  redirect(username, timerId, userId){
    window.localStorage.setItem('veggy', JSON.stringify({username, timerId, userId}))
    // TODO: scegliere un metodo di redirect
    //hashHistory.push({pathname: '/', query: {u: username}})
    window.location.href = "/";
  }
}
 
export default loginActions 