const React = require('react')

const UserList = React.createClass({
  getDefaultProps: function() {
    return { users: [] }
  },
  render(){

    const users = this.props.users.map(u => {

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
})

export default UserList