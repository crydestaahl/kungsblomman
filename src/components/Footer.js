import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kungsbloman"
            style={{ width: '15em', height: '4em' }}
          />
        </div>
        <div className="content has-text-centered has-text-info">
          <div className="container has-text-info">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Hem
                      </Link>
                    </li>

                    <li>
                      <Link className="navbar-item" to="/products">
                        Sortiment
                      </Link>
                    </li>

                    <li>
                      <Link className="navbar-item" to="/about">
                        Personal 
                      </Link>
                    </li>
                    
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Beställ blomsterbud
                      </Link>
                    </li>
                   
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                    {/* 
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    */}
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Kontakt
                      </Link>
                    </li>

                    <li>
                      <Link className="navbar-item" to="/find-us">
                        Hitta oss
                      </Link>
                    </li>

                    <li>
                      <Link className="navbar-item" to="/open-hours">
                        Öppettider
                      </Link>
                    </li>

                    <li>
                    <a
                      className="navbar-item"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Admin
                    </a>
                  </li>

                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/kungsblomman">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>               
                <a title="instagram" href="https://www.instagram.com/kungsblomman/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>              
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
