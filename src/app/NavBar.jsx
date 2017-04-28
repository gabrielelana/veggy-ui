import React from 'react'

class NavBar extends React.Component {
  constructor(){
    super()
    this.state = {connectionStatusClass: 'fa fa-link'}
  }
  componentDidMount() {
    window.addEventListener("offline", () => { this.setState({connectionStatusClass: 'fa fa-chain-broken'}) });
    window.addEventListener("online", () => { this.setState({connectionStatusClass: 'fa fa-link'})});
  }
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
            <span className="icon">
              <i className={this.state.connectionStatusClass} />
            </span>
          </a>  
          <a className="nav-item" href="#">
            <span className="icon">
              <i className="fa fa-user"></i>
            </span>
            {this.props.username}
          </a>
        </div>
      </nav>
    )
  }
}

export default NavBar
