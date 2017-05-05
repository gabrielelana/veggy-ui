import buildReducer from '../../../redux/buildReducer'

export default buildReducer({
  'INIT': (state, action) => {
    return {
      userId: action.payload.userId,
      username: action.payload.username,
      isLoggedIn: true,
      timerId: action.payload.timerId
    }
  },
  'NEED_LOGIN': () => {
    return {needLogin: true}
  }
})

