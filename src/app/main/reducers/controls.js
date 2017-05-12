import buildReducer from '../../../redux/buildReducer'

export default buildReducer({
  'POMODORO_STARTED': () => ({ startDisabled: true, squashDisabled: false }),
  'RESUME_TIMER': () => ({ startDisabled: true, squashDisabled: false }),
  'POMODORO_COMPLETED': () => ({ startDisabled: false, squashDisabled: true }),
  'POMODORO_SQUASHED': () => ({ startDisabled: false, squashDisabled: true }),
  'POMODORO_VOIDED': () => ({ startDisabled: false, squashDisabled: true }),
})