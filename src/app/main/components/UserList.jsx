const UserList = props => {
  const users = props.users.map(u => <User key={u.userId} username={u.username} /> )
    
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
  
  return (
    <a className={`panel-block`} href="#" >
      <span className="panel-icon">
        <i className="fa fa-user"></i>
      </span>
      {props.username}
    </a>)
}

export default UserList