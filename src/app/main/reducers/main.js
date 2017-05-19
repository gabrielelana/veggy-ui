import buildReducer from '../../../redux/buildReducer'

export default buildReducer({
  'Init': (state, action) => ({
    userId: action.payload.userId,
    username: action.payload.username,
    isLoggedIn: true,
    timerId: action.payload.timerId
  }),
  'NeedLogin': () => ({needLogin: true}),
  'StartRequested': () => ({ needDescription: true}),
  'StartCanceled': () => ({ needDescription: false }),
  'PomodoroStarted': () => ({ needDescription: false }),
})

