const React = require('react')

const UserList = React.createClass({
  render(){
    return (
      <div className="column">
        <nav className="panel">
          <p className="panel-heading">
            Users
          </p>
          <a className="panel-block is-active" href="#">
            <span className="panel-icon">
              <i className="fa fa-user"></i>
            </span>
            user 1
          </a>
          <a className="panel-block" href="#">
            user 2
            <span className="panel-icon">
              <i className="fa fa-user"></i>
            </span>
          </a>
        </nav>
      </div>
      )
  }
})

export default UserList