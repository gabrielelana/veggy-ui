import React from 'react'
import ReactDOM from 'react-dom'
import Main from './main'

require('../sass/style.scss')

export const App = React.createClass({
  render() {
    const children = React.cloneElement(this.props.children, { store: {} })
    return (
      <div>
        {children}
      </div>
    )
  }
})

ReactDOM.render(<Main /> , document.getElementById('app'))
