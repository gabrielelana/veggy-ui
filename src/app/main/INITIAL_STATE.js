import settings from 'settings'
import stringifyTime from './actions/stringifyTime'

const INITIAL_STATE = { 
  user_id: 'fake-user',
  username: 'fake-user',
  is_shared: false,
  start_disabled: false, 
  squash_disabled: true,
  time: stringifyTime(settings.duration),
  timer_id: null,
  pomodoro_id: null,
  message: '',
  timers: [],
  users: [],
  tags: [],
  need_login: false,
  need_description: false
}

export default INITIAL_STATE