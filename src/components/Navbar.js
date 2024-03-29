import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  
  componentDidMount() {
    console.log(this.state.navBarActiveClass ? false : true)
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kungsblomman" style={{ width: '175' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start has-text-centered">

              <Link className="navbar-item" to="/sortiment.html">
                Sortiment
              </Link>

              <Link className="navbar-item" to="/hittaoss.html">
                Hitta oss
              </Link>

              <Link className="navbar-item" to="/oppettider.html">
                Öppettider
              </Link>

              {/* 
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              */}
              <Link className="navbar-item" to="/kontaktaoss.html">
                Kontakta oss
              </Link>

              <Link className="navbar-item" to="/bestall.html">
                Beställ blommor
              </Link>
            </div>
            <div className="navbar-end has-text-centered">

            {/* 
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
              */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
