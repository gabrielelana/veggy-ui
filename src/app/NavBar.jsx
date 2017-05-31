import React from 'react'

class NavBar extends React.Component {
  constructor(){
    super()
    this.state = {connectionStatusClass: 'fa fa-link'}
    this.setOnline = this.setOnline.bind(this)
    this.setOffline = this.setOffline.bind(this)
  }
  componentDidMount() {
    window.addEventListener("offline", this.setOffline)
    window.addEventListener("online", this.setOnline)
  }
  componentWillUnmount() {
    window.removeEventListener(this.setOnline)
    window.removeEventListener(this.setOffline)
  }
  setOnline() {
    this.setState({connectionStatusClass: 'fa fa-link'})
  }
  setOffline() {
    this.setState({connectionStatusClass: 'fa fa-chain-broken'}) 
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
