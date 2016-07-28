var subscribers = {}
var prefix = 'SUB'
var lastSubscriber = 1

const dispatcher = {
  register: subscriber => {
    var id = prefix + lastSubscriber++
    subscribers[id] = subscriber
    return id
  },
  dispatch: action => {
    Object.keys(subscribers).forEach(sub => {
      subscribers[sub](action)
    })    
  },
  unregister: id => {
    // TODO
  }
}

export default dispatcher