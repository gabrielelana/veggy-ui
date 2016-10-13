import {hashHistory} from 'react-router'
import actionStream from '../../../redux/actionStream'
import ws from '../../../serverPush/webSocketStream'

const resumeActions = {
  wireup(){
    if (window.localStorage.getItem('veggy')) {
      const userInfo = JSON.parse(window.localStorage.getItem('veggy'))
      ws.sendCommand(`login:${userInfo.username}`)
      actionStream.push({type: 'INIT', payload: userInfo})
    } else {
      hashHistory.push('/login')
    }
  }
}

export default resumeActions