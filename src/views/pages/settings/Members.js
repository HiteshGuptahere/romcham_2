import React from 'react'
import './Members.css'
import { BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Groups() {
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
                  <button type="button" class="btn btn-light">
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
            <div className="tables">
              <div className="row">
                <div className="col-sm-2">Profile</div>
                <div className="col-sm-2">
                  <div
                    class="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Name
                  </div>
                </div>
                <div className="col-sm-2">
                  <div
                    class="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Date
                  </div>
                </div>
                <div className="col-sm-2">
                  <div
                    class="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Email
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-2">
                <div className="checkbox" style={{ marginLeft: '45px' }}>
                  <input type="checkbox" name="" style={{ height: '18px', width: '18px' }} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="header">
                  <h6>Tom Cruice</h6>
                  <b>6:30PM</b>
                </div>
              </div>
              <div className="col-sm-2">
                <h6>May 26,2019</h6>
                <b>6:30PM</b>
              </div>
              <div className="col-sm-2">
                <h6>tomcruice@gmail.com</h6>
              </div>
              <div className="col-sm-2">
                <div className="icon">
                  <div className="trash">
                    <BsTrash />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-2">
                <div className="checkbox" style={{ marginLeft: '45px' }}>
                  <input type="checkbox" name="" style={{ height: '18px', width: '18px' }} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="header">
                  <h6>Tom Cruice</h6>
                  <b>6:30PM</b>
                </div>
              </div>
              <div className="col-sm-2">
                <h6>May 26,2019</h6>
                <b>6:30PM</b>
              </div>
              <div className="col-sm-2">
                <h6>tomcruice@gmail.com</h6>
              </div>
              <div className="col-sm-2">
                <div className="icon">
                  <div className="trash">
                    <BsTrash />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-2">
                <div className="checkbox" style={{ marginLeft: '45px' }}>
                  <input type="checkbox" name="" style={{ height: '18px', width: '18px' }} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="header">
                  <h6>Tom Cruice</h6>
                  <b>6:30PM</b>
                </div>
              </div>
              <div className="col-sm-2">
                <h6>May 26,2019</h6>
                <b>6:30PM</b>
              </div>
              <div className="col-sm-2">
                <h6>tomcruice@gmail.com</h6>
              </div>
              <div className="col-sm-2">
                <div className="icon">
                  <div className="trash">
                    <BsTrash />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-2">
                <div className="checkbox" style={{ marginLeft: '45px' }}>
                  <input type="checkbox" name="" style={{ height: '18px', width: '18px' }} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="header">
                  <h6>Tom Cruice</h6>
                  <b>6:30PM</b>
                </div>
              </div>
              <div className="col-sm-2">
                <h6>May 26,2019</h6>
                <b>6:30PM</b>
              </div>
              <div className="col-sm-2">
                <h6>tomcruice@gmail.com</h6>
              </div>
              <div className="col-sm-2">
                <div className="icon">
                  <div className="trash">
                    <BsTrash />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Groups
