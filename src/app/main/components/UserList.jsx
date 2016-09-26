import React from 'react'
import R from 'ramda'

const UserList = React.createClass({


  getDefaultProps(){
    return {users: [] }
  },

  render(){
    const users = this.props.users.map(u => (
      <User key={u.user_id} 
        onSelect={() => this.props.onToggleUser(u.user_id)} 
        selected={u.selected} 
        username={u.username} />
      ))
    
    return (
      <div className="column">
        <nav className="panel" style={{backgroundColor: '#FFFFFF'}}>
          <p className="panel-heading">
            Users
            <a onClick={this.props.onSquashSharedPomodoro} className="button is-warning is-pulled-right">Shared Squash</a>
            <a onClick={this.props.onStartSharedPomodoro} className="button is-primary is-pulled-right">Shared Pomodoro</a>
          </p>
          {users}
        </nav>
      </div>
    )
  }
})

const User = props => {
  const rowStyle = props.selected?'selectedRow':''
  
  return (
    <a className={`${rowStyle} panel-block`} href="#" onClick={props.onSelect} >
      <span className="panel-icon">
        <i className="fa fa-user"></i>
      </span>
      {props.username}
    </a>)
}

export default UserList