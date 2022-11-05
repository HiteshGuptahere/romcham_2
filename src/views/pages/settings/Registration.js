import React from 'react'
import './settings.css'
import { Link } from 'react-router-dom'

function Registration() {
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <div
            className="card-header text-white"
            style={{ backgroundColor: '#4E6fB7', borderRadius: '10px' }}
          >
            <div className="row">
              <div className="col">
                <div className="container">
                  <div className="circular-progress">
                    <div className="value-container">100%</div>
                  </div>
                </div>
              </div>
              <div className="col">
                <h6 className="text">Commitee information</h6>
                <p>Lorem ipsum dollor sit amet</p>
                <div className="button">
                  <button type="button" className="btn btn-light">
                    Complite Your Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          <aside className="Sidebar">
            <nav className="nav">
              <div>
                <Link to="/page/settings/general" className="nav-link">
                  <h5 className="nav-link-name">General</h5>
                </Link>

                <div className="nav-list">
                  <Link to="/page/settings/managers" className="nav-link">
                    <h5 className="nav-link-name">Managers</h5>
                  </Link>

                  <Link to="/page/settings/permissions" className="nav-link">
                    <h5 className="nav-link-name">Permissions</h5>
                  </Link>

                  <Link to="/page/settings/registration" className="nav-link">
                    <h5 className="nav-link-name">Registration</h5>
                  </Link>

                  <Link to="/page/settings/members" className="nav-link">
                    <h5 className="nav-link-name">Members</h5>
                  </Link>

                  <Link to="/page/settings/groups" className="nav-link">
                    <h5 className="nav-link-name">Groups</h5>
                  </Link>
                </div>
              </div>
            </nav>
          </aside>
        </div>
        <div className="col-8">
          <div className="card-header" style={{ height: '400px', width: '900px' }}>
            <h5 className="text-col-sm-3" style={{ padding: '15px' }}>
              <b>Add Sections</b>
            </h5>
            <div className="checkbox" style={{ padding: '15px' }}>
              <input type="checkbox" name="KYC" />
              &nbsp;KYC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" name="KYC" />
              &nbsp;Personal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" name="KYC" />
              &nbsp;Education&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" name="KYC" />
              &nbsp;Work&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" name="KYC" />
              &nbsp;About Me
            </div>
            <div
              className="footer-button"
              style={{
                paddingTop: '200px',
                textAlign: 'right',
              }}
            >
              <button type="button" className="btn btn-primary btn-lg">
                SAVE CHANGES
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration
