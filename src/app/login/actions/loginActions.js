import actionStream from '../../../redux/actionStream'
import sendCommand from '../../sendCommand'
import ws from '../../../serverPush/webSocketStream'

const loginActions = {
  login(username) {
    sendCommand({command: 'Login', username: username}, () => {
      actionStream.push({type: 'WAIT_FOR_LOGIN'})
    })
    ws.sendCommand(`login:${username}`)
  },
  redirect(username, timerId, userId){
    window.localStorage.setItem('veggy', JSON.stringify({username, timerId, userId}))
    window.location.href = '/'
  }
}
 
export default loginActions 