//import {hashHistory} from 'react-router'
import dispatcher from '../../../redux/dispatcher'
import sendCommand from '../../sendCommand'
import ws from '../../../serverPush/webSocketConnection'

const loginActions = {
  login(username) {
    sendCommand({command: 'Login', username: username})
      .then(() => {
        dispatcher.push({type: 'WAIT_FOR_LOGIN'})
      })
      .catch(err => {
        dispatcher.push({type: 'API_ERROR', payload: err})
      })
    ws.sendCommand(`login:${username}`)
  },
  redirect(username, timerId, userId){
    window.localStorage.setItem('veggy', JSON.stringify({username, timerId, userId}))
    // TODO: scegliere un metodo di redirect
    //hashHistory.push({pathname: '/', query: {u: username}})
    window.location.href = "/";
  }
}
 
export default loginActions 