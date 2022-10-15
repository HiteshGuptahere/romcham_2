import React from 'react'
import Logo from './assets/Logo1.png'
import styles from './navbar.module.css'

const NavBar = () => {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ margin: '0rem 7rem' }}>
            <img src={Logo} alt="RoCham" height="24" style={{ width: '12rem', height: '2.5rem' }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.liAlign}`}>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  vision
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  benifits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Membership
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>

              <form className="d-flex">
                <button className={`btn w-25 ${styles.loginNav}`} type="submit">
                  login
                </button>
                <button className={`btn w-100 ${styles.navReg}`} type="submit">
                  Register
                </button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
