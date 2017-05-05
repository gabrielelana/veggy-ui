import actionStream from '../../../redux/actionStream'
import sendCommand from '../../sendCommand'
import ws from '../../../redux/webSocketStream'

const userActions = {
  toggleSelectedUsers(user){
    actionStream.push({type: 'SELECTED_USERS_CHANGED', payload: user})
  },
  login(username) {
    sendCommand({command: 'Login', username: username}, () => {
      actionStream.push({type: 'WAIT_FOR_LOGIN'})
    })
    ws.sendCommand(`login:${username}`)
  }
}

export default userActions