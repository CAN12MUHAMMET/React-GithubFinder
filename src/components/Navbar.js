import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
       
      
      <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a href="/" className='navbar-brand'>
        <i className="bi bi-github"></i> {this.props.title}
        </a>
        </div>
      </nav>
      
    
    )
  }
}
Navbar.defaultProps={
    title:"Github finder"
}

export default Navbar
