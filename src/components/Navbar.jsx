import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} `} style={{backgroundColor: props.mode==='light'?'#ececec':'#212529'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active home" aria-current="page" to="/" id='home'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link about" to="/about" id='about'>{props.about}</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input toggleMode" type="checkbox" role="switch" id="toggleMode" onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="toggleMode">Enable {props.mode==='light'?'Dark':'Light'} Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}
// in case the props have not been passed as an argument, we can use the defaultProps to set their values
Navbar.defaultProps = {
  title: 'Set title here',
  about: 'About text here'
}