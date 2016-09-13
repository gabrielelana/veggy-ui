import moment from 'moment'

export default function nextTick(timeMs){
  const duration = moment.duration(timeMs).subtract(1, 'seconds')
  return duration.asMilliseconds()
}