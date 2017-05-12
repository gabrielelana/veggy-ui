import dispatcher from '../../../redux/dispatcher'
import sendCommand from '../../sendCommand'
import ws from '../../../redux/webSocketStream'

const userActions = {
  toggleSelectedUsers(user){
    dispatcher.dispatch({type: 'SELECTED_USERS_CHANGED', payload: user})
  },
  login(username) {
    sendCommand({command: 'Login', username: username}, () => {
      dispatcher.dispatch({type: 'WAIT_FOR_LOGIN'})
    })
    ws.sendCommand(`login:${username}`)
  }
}

export default userActions