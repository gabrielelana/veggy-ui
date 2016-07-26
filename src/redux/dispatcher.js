var subscribers = {}
var prefix = 'SUB'
var lastSubscriber = 1

const dispatcher = {
  register: subscriber => {
    var id = prefix + lastSubscriber++
    subscribers[id] = subscriber
    return id
  },
  dispatch: payload => {
    Object.keys(subscribers).forEach(sub => {
      subscribers[sub](payload)
    })    
  },
  unregister: id => {
    // TODO
  }
}

export default dispatcher