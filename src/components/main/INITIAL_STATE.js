const INITIAL_STATE = { 
  userId: 'fake-user',
  username: 'fake-user',
  isLoggedIn: false,
  clientTimerId: null,
  startDisabled: false, 
  squashDisabled: true,
  // TODO: remove constant value from here
  timer: '1:00',
  timerId: null,
  message: ''
}

export default INITIAL_STATE