import xs from 'xstream'

// TODO: investigate in a better implementation
function createActionStream(){
  return {
    id: 1,
    listener: {},
    start: function (listener) {
      this.listener = listener
    },
    next(action){
      this.listener.next(action)
    },
    stop: function () {}
  }
}

const ds = createActionStream();

const stream = {
  push: action => {
    ds.next(action)
  },
  getStream(){
    return xs.create(ds)
  }
}

export default stream