import buildReducer from '../../../redux/buildReducer'

export default buildReducer({
  'POMODORO_STARTED': (state, action) => ({ startDisabled: true, squashDisabled: false }),
  'POMODORO_COMPLETED': (state, action) => ({ startDisabled: false, squashDisabled: true }),
  'POMODORO_SQUASHED': (state, action) => ({ startDisabled: false, squashDisabled: true }),
  'POMODORO_VOIDED': (state, action) => ({ startDisabled: false, squashDisabled: true }),
})