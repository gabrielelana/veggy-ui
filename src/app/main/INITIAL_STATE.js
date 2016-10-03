import settings from 'settings'
import stringifyTime from './actions/stringifyTime'

const INITIAL_STATE = { 
  userId: 'fake-user',
  username: 'fake-user',
  isLoggedIn: false,
  isShared: false,
  startDisabled: false, 
  squashDisabled: true,
  time: stringifyTime(settings.duration),
  timerId: null,
  pomodoroId: null,
  message: '',
  timers: [],
  users: []
}

export default INITIAL_STATE