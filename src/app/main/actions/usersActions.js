import actionStream from '../../../redux/actionStream'

const timerActions = {
  toggleSelectedUsers(user){
    actionStream.push({type: 'SELECTED_USERS_CHANGED', payload: user})
  }
}

export default timerActions