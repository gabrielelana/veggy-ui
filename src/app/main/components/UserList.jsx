import React from 'react'
import R from 'ramda'

const UserList = props => {
  const users = props.users.map(u => (
      <User key={u.userId} 
        onSelect={() => props.onToggleUser(u.userId)} 
        selected={u.selected} 
        username={u.username} />
      ))
    
  return (
    <div className="column">
      <nav className="panel" style={{backgroundColor: '#FFFFFF'}}>
        <p className="panel-heading">
          Users
        </p>
        {users}
      </nav>
    </div>
  )
}

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