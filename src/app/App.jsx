import React from 'react'
import ReactDOM from 'react-dom'

require('../sass/style.scss')

export const App = React.createClass({
  render() {
    return (
      <div>Hello Codejam</div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
