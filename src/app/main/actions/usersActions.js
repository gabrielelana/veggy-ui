import dispatcher from '../../../redux/dispatcher'

const timerActions = {
  toggleSelectedUsers(user){
    dispatcher.dispatch({type: 'SELECTED_USERS_CHANGED', payload: user})
  }
}

export default timerActions