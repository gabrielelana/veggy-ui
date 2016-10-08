import xs from 'xstream'

// TODO: investigate in a better implementation
function createProducer(){
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

const ds = createProducer();

const stream = {
  push: action => {
    ds.next(action)
  },
  createStream(){
    return xs.create(ds)
  }
}

export default stream