import React from 'react'

const NavBar = React.createClass({
  render(){
    return (
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item" href="#">
            <h2 className="title is-2">Veggy</h2>
          </a>
        </div>
        <div className="nav-right nav-menu">
          <a className="nav-item" href="#">
            User
          </a>
        </div>
      </nav>
      )
  }
})

export default NavBar
