const UserList = ({users, onToggleUser}) => {
  const userRows = users.map(u => (
      <UserRow key={u.user_id} 
        onSelect={() => onToggleUser(u.user_id)} 
        selected={u.selected} 
        username={u.username} />
      ))
    
  return (
    <div className="column">
      <nav className="panel" style={{backgroundColor: '#FFFFFF'}}>
        <p className="panel-heading">
          Users
        </p>
        {userRows}
      </nav>
    </div>
  )
}

const UserRow = ({username, selected, onSelect}) => {
  const rowStyle = selected?'selectedRow':''
  
  return (
    <a className={`${rowStyle} panel-block`} href="#" onClick={onSelect} >
      <span className="panel-icon">
        <i className="fa fa-user"></i>
      </span>
      {username}
    </a>)
}

export default UserList