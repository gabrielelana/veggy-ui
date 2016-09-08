import buildReducer from '../../../redux/buildReducer'

export default buildReducer({
  'USERS_LOADED': (state, action) => ({ 
    users: action.payload
  })
})