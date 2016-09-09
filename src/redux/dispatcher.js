import xs from 'xstream'

function createDispatcherStream(){
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

const ds = createDispatcherStream();

const dispatcher = {
  dispatch: action => {
    ds.next(action)
  },
  getStream(){
    return xs.create(ds)
  }
}

export default dispatcher