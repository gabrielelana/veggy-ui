import moment from 'moment'

function pad2(num){
  const str = num.toString()
  const pad = '00'
  return pad.substring(0, pad.length - str.length) + str
}

export default function stringifyTime(ms){
  const timer = moment.duration(ms, 'ms')
  return `${pad2(timer.minutes())}:${pad2(timer.seconds())}`
}
