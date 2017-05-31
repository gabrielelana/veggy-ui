import settings from 'settings'
import stringifyTime from './actions/stringifyTime'

const INITIAL_STATE = { 
  user_id: '',
  username: '',
  is_shared: false,
  start_disabled: false, 
  squash_disabled: true,
  time: stringifyTime(settings.duration),
  timer_id: null,
  pomodoro_id: null,
  message: '',
  message_type: 'info',
  timers: [],
  users: [],
  tags: [],
  need_login: false,
  need_description: false,
  waiting_for_login: false
}

export default INITIAL_STATE