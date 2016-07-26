var subscribers = {}
var prefix = 'SUB'
var lastSubscriber = 1

const dispatcher = {
  register: function(subscriber) {
    var id = prefix + lastSubscriber++
    subscribers[id] = subscriber
    return id
  },
  dispatch: function(payload) {
    Object.keys(subscribers).forEach(sub => {
      subscribers[sub](payload)
    })    
  }
}

export default dispatcher