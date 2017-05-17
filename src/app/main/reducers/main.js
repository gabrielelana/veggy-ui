import buildReducer from '../../../redux/buildReducer'

export default buildReducer({
  'INIT': (state, action) => ({
    userId: action.payload.userId,
    username: action.payload.username,
    isLoggedIn: true,
    timerId: action.payload.timerId
  }),
  'NEED_LOGIN': () => ({needLogin: true}),
  'START_REQUESTED': () => ({ needDescription: true}),
  'START_CANCELED': () => ({ needDescription: false }),
  'POMODORO_STARTED': () => ({ needDescription: false }),
})

