import settings from 'settings'
import stringifyTime from './actions/stringifyTime'

const INITIAL_STATE = { 
  user_id: 'fake-user',
  username: 'fake-user',
  isLoggedIn: false,
  isShared: false,
  startDisabled: false, 
  squashDisabled: true,
  time: stringifyTime(settings.duration),
  timer_id: null,
  pomodoro_id: null,
  message: '',
  timers: [],
  users: [],
  needLogin: false,
  needDescription: false
}

export default INITIAL_STATE