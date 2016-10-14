import settings from 'settings'
import stringifyTime from './actions/stringifyTime'

const INITIAL_STATE = { 
  startDisabled: false, 
  time: stringifyTime(settings.duration),
  pomodoroId: null,
  message: '',
  messageType: '',
}

export default INITIAL_STATE