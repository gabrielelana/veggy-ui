//import {hashHistory} from 'react-router'
import actionStream from '../../../redux/actionStream'
import sendCommand from '../../sendCommand'
import ws from '../../../serverPush/webSocketConnection'

const loginActions = {
  login(username) {
    sendCommand({command: 'Login', username: username}, () => {
      actionStream.push({type: 'WAIT_FOR_LOGIN'})
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