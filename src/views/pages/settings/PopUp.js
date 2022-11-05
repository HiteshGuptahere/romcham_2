import React from 'react'
import './PopUp.css'
import { MdOutlineCancel } from 'react-icons/md'
import { Link } from 'react-router-dom'

function PopUp() {
  return (
    <>
      <div className="card" style={{ width: '900px', height: '650px', background: '#F8F9FF' }}>
        <div className="card-body">
          <h5 className="card-title">ADD NOTICE</h5>
          <div className="cancel-icon">
            <MdOutlineCancel />
          </div>
          <br />
          <form className="forms">
            <label for="email" className="form-label">
              Select Group
            </label>
            <select className="form-select form-select-lg">
              <option>Select</option>
              <option>1</option>
              <option>2</option>
            </select>
            <br />
            <label for="email" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="text"
              placeholder="Type here..."
              name="email"
            />
            <br />
            <b className="title">+ADD A LINK</b>&nbsp;&nbsp;&nbsp;
            <b className="title">+ATTACH FILE</b>
            <br />
            <br />
            <label for="email" className="form-label">
              Add Link
            </label>
            <input
              type="text"
              className="form-control"
              id="text"
              placeholder="Type here.."
              name="email"
            />
            <br />
            <label for="comment">Add Description</label>
            <textarea
              className="form-control"
              rows="5"
              id="comment"
              name="text"
              placeholder="Type Here....."
            ></textarea>
            <br />
            <div className="footer-button">
              <Link className="btn btn-primary btn-noticeBoard" to="/user/noticeboard">
                POST
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default PopUp
