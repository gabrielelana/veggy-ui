import React from 'react'

const UserList = props => {
  const users = props.users.map(u => {
    return (
      <a key={u.user_id} className="panel-block" href="#">
        <span className="panel-icon">
          <i className="fa fa-user"></i>
        </span>
        {u.username}
      </a>)
  })

  return (
    <div className="column">
      <nav className="panel">
        <p className="panel-heading">
          Users
        </p>
        {users}
      </nav>
    </div>
  )
}

UserList.defaulProps = {
  users: []
}

export default UserList