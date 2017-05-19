import buildReducer from '../../../redux/buildReducer'

export default buildReducer({
  'PomodoroStarted': () => ({ startDisabled: true, squashDisabled: false }),
  'ResumeTimer': () => ({ startDisabled: true, squashDisabled: false }),
  'PomodoroCompleted': () => ({ startDisabled: false, squashDisabled: true }),
  'PomodoroSquashed': () => ({ startDisabled: false, squashDisabled: true }),
  'PomodoroVoided': () => ({ startDisabled: false, squashDisabled: true }),
})