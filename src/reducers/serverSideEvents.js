import buildReducer from '../redux/buildReducer'

export default buildReducer({
  'TimerStarted': (state, action) => ({ startDisabled: true, squashDisabled: false }),
  'CommandFailed': (state, action) => {
    return { message: `There was an error: ${action.payload.why}` }
  }
})