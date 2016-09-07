const INITIAL_STATE = { 
  userId: 'fake-user',
  username: 'fake-user',
  isLoggedIn: false,
  startDisabled: false, 
  squashDisabled: true,
  // TODO: remove constant value from here
  time: '1:00',
  timerId: null,
  pomodoroId: null,
  message: ''
}

export default INITIAL_STATE