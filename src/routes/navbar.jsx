import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import "../Navbar.css";

class Navbar extends Component {
    state = { clicked: false }
  
    handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
    }
  
    render() {
      return(
  
        <div>
          <div className="nav">
             <nav className="NavbarItems">
              <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
              </div>
              <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-links">
                  <Link to="/" style={{textDecoration: 'none', color: 'rgb(173, 171, 168)'}}>Home</Link>
                </li>
                |
                <li className="nav-links">
                  <Link to="./about" style={{textDecoration: 'none', color: 'rgb(173, 171, 168)'}}>About</Link>
                </li>
                |
                <li className="nav-links">
                  <Link to="./projects" style={{textDecoration: 'none', color: 'rgb(173, 171, 168)'}}>Projects</Link>
                </li>
              </ul>
        </nav>
    </div>
  <Outlet />
  </div>
      )
    }
  }

  export default Navbar