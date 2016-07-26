const listeners = []
const currentState = {}
  
function getState() {
  return currentState
}

function subscribe(listener) {
  listeners.push(listener)
  var isSubscribed = true

  return function unsubscribe() {
    if (!isSubscribed) {
      return
    }

    isSubscribed = false
    var index = listeners.indexOf(listener)
    listeners.splice(index, 1)
  }
}

function dispatch(action) {
  listeners.slice().forEach(listener => listener())
  return action
}

export default {
  dispatch,
  subscribe,
  getState
}

