export default function nextTick(timeStr){
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