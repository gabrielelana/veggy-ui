import dispatcher from '../redux/dispatcher'

export default function displayReducers(state, action){
  if (action.type === 'START_TIMER'){
    const timerId = setInterval(() => {
      const timer = nextTick(state.timer)
      dispatcher.dispatch({type: 'UPDATE_TIMER', payload: {timer: timer}})
    }, 1000)
    return {timerId: timerId}
  }
  if (action.type === 'SQUASH_TIMER') {
    clearInterval(state.timerId)
    return {timerId: null}
  }
  if (action.type === 'UPDATE_TIMER') {
    return {timer: action.payload.timer}
  }
}

function nextTick(timeStr){
  var minutes = parseInt(timeStr.split(':')[0], 10)
  var seconds = parseInt(timeStr.split(':')[1], 10)
  if (seconds === 0){
    seconds = 59
    minutes = minutes - 1
  } else {
    seconds = seconds - 1
  }
  const minutesStr = '00'.substring(0, 2 - minutes.toString().length) + minutes
  const secondsStr = '00'.substring(0, 2 - seconds.toString().length) + seconds
  return `${minutesStr}:${secondsStr}`
}