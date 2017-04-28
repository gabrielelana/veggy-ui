import React from 'react'
import xs from 'xstream'
import request from 'superagent'

//const flattenConcurrently = require('xstream/extra/flattenConcurrently')

const sink = {
  addStream(st){
    if (!this.stream){
      this.stream = st
    }
    this.stream = xs.merge(this.stream, st)
  },
  run(){
    this.stream.addListener({
      next: x => console.log(x)
    })
  }
}

class Play extends React.Component {
  componentDidMount() {
    const what = 'calcutta'
    const s1 = xs
      .fromPromise(request.get(`https://api.spotify.com/v1/search?type=artist&q=${what}`))
      .map(x => x.body.artists.items)
      
    const s2 = xs
      .fromPromise(request.get(`https://api.spotify.com/v1/search?type=album&q=${what}`))
      .map(x => x.body.albums.items)
    sink.addStream(s1)
    sink.addStream(s2)
    // xs.merge(s1, s2).addListener({
    //   next: evt => console.log('>', evt)
    // })
    sink.run()
  }
  render(){
    return <div> Play </div>
  }
}

export default Play