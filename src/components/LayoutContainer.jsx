const React = require('react')
const Display = require('./Display')
const Controls = require('./Controls')
const TaskList = require('./TaskList')
const UserList = require('./UserList')
  
const LayoutContainer = React.createClass({
  render(){ 
    return (
      <div style={{marginTop: '20px'}}>
        <div className="columns">
          <Display />
          <Controls />
        </div>
        <div className="columns">
          <TaskList />
          <UserList />
        </div>
      </div>
    )
  }
})

export default LayoutContainer