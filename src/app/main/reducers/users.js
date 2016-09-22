import buildReducer from '../../../redux/buildReducer'
import R from 'ramda'

export default buildReducer({
  'USERS_LOADED': (state, action) => ({ 
    users: action.payload //R.reject(u => u.user_id === state.userId , action.payload)
  }),
  'SELECTED_USERS_CHANGED': (state, action) => {
    return state.users.map(u => {
      if (u.user_id === action.payload){
        return Object.assign(u, {selected: !u.selected}) 
      } 
      return Object.assign(u)
    })
  }
})