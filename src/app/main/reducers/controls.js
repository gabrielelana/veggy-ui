import buildReducer from '../../../redux/buildReducer'

export default buildReducer({
  'POMODORO_STARTED': () => ({ startDisabled: true, squashDisabled: false }),
  'POMODORO_COMPLETED': () => ({ startDisabled: false, squashDisabled: true }),
})