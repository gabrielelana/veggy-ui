import dispatcher from '../../../redux/dispatcher'
import sendCommand from '../../sendCommand'
import ws from '../../../redux/webSocketStream'

const userActions = {
  toggleSelectedUsers(user){
    dispatcher.dispatch({type: 'SelectedUsersChanged', payload: user})
  },
  login(username) {
    sendCommand({command: 'Login', username: username}, () => {
      dispatcher.dispatch({type: 'WaitForLogin'})
    })
    ws.sendCommand(`login:${username}`)
  }
}

export default userActions