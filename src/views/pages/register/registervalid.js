import React, { Component } from 'react'

import FormValidator from './FormValidator'
import './registervalid.css'
class App extends Component {
  constructor() {
    super()
    this.validator = new FormValidator([
      {
        field: 'full_name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter full name.',
      },
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter your email address.',
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'Enter valid email address.',
      },
      {
        field: 'phone',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter a phone number.',
      },
      {
        field: 'phone',
        method: 'matches',
        args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
        validWhen: true,
        message: 'Enter valid phone number.',
        color: 'red',
      },
      {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter password.',
      },
      {
        field: 'password_confirmation',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter Password confirmation.',
      },
      {
        field: 'password_confirmation',
        method: this.passwordMatch, // notice that we are passing a custom function here
        validWhen: true,
        message: 'Password and password confirmation do not match.',
      },
    ])
    this.state = {
      full_name: '',
      email: '',
      phone: '',
      password: '',
      password_confirmation: '',
      validation: this.validator.valid(),
    }
    this.submitted = false
  }
  passwordMatch = (confirmation, state) => state.password === confirmation
  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleFormSubmit = (event) => {
    event.preventDefault()
    const validation = this.validator.validate(this.state)
    this.setState({
      validation,
    })
    this.submitted = true
    if (validation.isValid) {
      //reaches here if form validates successfully...
    }
  }
  render() {
    let validation = this.submitted ? this.validator.validate(this.state) : this.state.validation
    return (
      //   <div className="card">
      //     <div className="card-body">
      <div className="container" style={{ background: '#F2F2F2', width: '100%', height: '145vh' }}>
        <div className="row">
          <div className="col-md-6 ">
            <form className="registrationForm">
              <div className={validation.email.isInvalid ? 'has-error' : ''}>
                <label htmlFor="full_name" style={{ color: '#6E7180' }}>
                  Company Name: <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  style={{ height: '54px', width: '367px' }}
                  type="string"
                  className="form-control"
                  name="full_name"
                  placeholder="Pls Enter The Name of The company."
                  onChange={this.handleInputChange}
                />{' '}
                <span className="help-block">{validation.full_name.message}</span>{' '}
              </div>
              <br></br>
              <div className={validation.email.isInvalid ? 'has-error' : ''}>
                <label htmlFor="full_name" style={{ color: '#6E7180' }}>
                  Representative&apos;s Email Address <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  style={{ height: '54px', width: '367px' }}
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Pls Enter the Representative's Email Address *"
                  onChange={this.handleInputChange}
                />{' '}
                <span className="help-block">{validation.email.message}</span>{' '}
              </div>
              <br></br>
              <div className={validation.email.isInvalid ? 'has-error' : ''}>
                <label htmlFor="full_name" style={{ color: '#6E7180' }}>
                  {' '}
                  Area of Business: <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  id="areabusiness"
                  //   style={{ height: "54px", width: "200%" }}
                  type="string"
                  className="form-control"
                  name="full_name"
                  placeholder="Enter Your Business Industry"
                  onChange={this.handleInputChange}
                />{' '}
                <span className="help-block">{validation.full_name.message}</span>{' '}
              </div>
              <br></br>
              <div className={validation.phone.isInvalid ? 'has-error' : ''}>
                <label htmlFor="phone" style={{ color: '#6E7180' }}>
                  {' '}
                  Number Of Employees: <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  style={{ height: '54px', width: '367px' }}
                  type="number"
                  className="form-control"
                  name="phone"
                  placeholder="Enter Number Of Employees"
                  onChange={this.handleInputChange}
                />{' '}
                <span className="help-block">{validation.phone.message}</span>{' '}
              </div>

              <br></br>
              <div className={validation.phone.isInvalid ? 'has-error' : ''}>
                <label htmlFor="phone" style={{ color: '#6E7180' }}>
                  {' '}
                  Annual Turn Over: <span style={{ color: 'red' }}>*</span>
                </label>
                <br></br>
                <div
                  className="radiobutton"
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div>
                    <input type="radio" id="html" name="fav_language" value="HTML" />{' '}
                    <label htmlFor="html" style={{ color: '#6E7180' }}>
                      {' '}
                      SGD10M
                    </label>
                  </div>
                  {/* <br></br> */}
                  <div className="" style={{ marginRight: '-8rem' }}>
                    <input type="radio" id="css" name="fav_language" value="CSS" />
                    <label htmlFor="css" style={{ color: '#6E7180' }}>
                      SGD10M
                    </label>
                  </div>
                </div>
                <br></br>
              </div>

              {/* <div className={validation.password.isInvalid && "has-error"}>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleInputChange}
                    />{" "}
                    <span className="help-block">
                      {validation.password.message}
                    </span>{" "}
                  </div> */}
              <br></br>
              {/* <div className={validation.phone.isInvalid && "has-error"}>
                <label htmlFor="phone" style={{ color: "#6E7180" }}>
                  {" "}
                  Membership Category:  <span style={{ color: "red" }}>*</span>
                </label>
                  <br></br>
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                 {" "}
                <label for="html" style={{ color: "#6E7180" }}>
                  {" "}
                  Diamond (10.000 SGD / 12 Months)
                </label>
                <br></br>
                <input type="radio" id="css" name="fav_language" value="CSS" /> {" "}
                <label for="css" style={{ color: "#6E7180" }}>
                Major Supporter (2800 SGD / 12 Months)
                </label>
                <br></br>
                <input type="radio" id="css" name="fav_language" value="CSS" /> {" "}
                <label for="css" style={{ color: "#6E7180" }}>
                SME (700SGD / 12 Months)
                </label>
                <br></br>
                <input type="radio" id="css" name="fav_language" value="CSS" /> {" "}
                <label for="css" style={{ color: "#6E7180" }}>
                Individual (380SGD / 12 Months)
                </label>
                {/* <br></br> */}
              {/* <input type="radio" id="css" name="fav_language" value="CSS" /> {" "}
                <label for="css" style={{ color: "#6E7180" }}>
                  CSS
                </label> */}
              {/* </div> */}
              <div className={validation.phone.isInvalid ? 'has-error' : ''}>
                <label htmlFor="phone" style={{ color: '#6E7180' }}>
                  {' '}
                  Membership Category: <span style={{ color: 'red' }}>*</span>
                </label>
                <br></br>
                <div
                  className="radiobutton"
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div>
                    <input type="radio" id="html" name="fav_language" value="HTML" />{' '}
                    <label htmlFor="html" style={{ color: '#6E7180' }}>
                      {' '}
                      Diamond (10.000 SGD / 12 Months)
                    </label>
                    <br></br>
                    <input type="radio" id="css" name="fav_language" value="CSS" />{' '}
                    <label htmlFor="css" style={{ color: '#6E7180' }}>
                      Major Supporter (2800 SGD / 12 Months)
                    </label>
                    <br></br>
                    <input type="radio" id="css" name="fav_language" value="CSS" />{' '}
                    <label htmlFor="css" style={{ color: '#6E7180' }}>
                      SME (700SGD / 12 Months)
                    </label>
                    <br></br>
                    <input type="radio" id="css" name="fav_language" value="CSS" />{' '}
                    <label htmlFor="css" style={{ color: '#6E7180' }}>
                      Individual (380SGD / 12 Months)
                    </label>
                  </div>
                  <div style={{ marginRight: '-23rem' }}>
                    <input type="radio" id="html" name="fav_language" value="HTML" />{' '}
                    <label htmlFor="html" style={{ color: '#6E7180' }}>
                      {' '}
                      Diamond (10.000 SGD / 12 Months)
                    </label>
                    <br></br>
                    <input type="radio" id="css" name="fav_language" value="CSS" />{' '}
                    <label htmlFor="css" style={{ color: '#6E7180' }}>
                      Major Supporter (2800 SGD / 12 Months)
                    </label>
                    <br></br>
                    <input type="radio" id="css" name="fav_language" value="CSS" />{' '}
                    <label htmlFor="css" style={{ color: '#6E7180' }}>
                      SME (700SGD / 12 Months)
                    </label>
                    <br></br>
                  </div>
                </div>
                <br></br>
              </div>
              {/* <div
                className={
                  validation.password_confirmation.isInvalid && "has-error"
                }
              >
                <label htmlFor="password_confirmation">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  name="password_confirmation"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.password_confirmation.message}
                </span>{" "}
              </div> */}
              {/* <button
                onClick={this.handleFormSubmit}
                className="btn btn-primary"
              >
                {" "}
                Register{" "}
              </button> */}
            </form>
          </div>
          <div className="col-md-6 col-md-offset-6">
            <form className="registrationForm">
              <div className={validation.email.isInvalid ? 'has-error' : ''}>
                <label htmlFor="full_name" style={{ color: '#6E7180' }}>
                  Full Name of Co&apos;s Representative:
                  <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  style={{ height: '54px', width: '367px' }}
                  type="string"
                  className="form-control"
                  name="full_name"
                  placeholder="Who Shall We Connect With From Your Company"
                  onChange={this.handleInputChange}
                />{' '}
                <span className="help-block">{validation.full_name.message}</span>{' '}
              </div>
              <br></br>
              <div className={validation.email.isInvalid ? 'has-error' : ''}>
                <label htmlFor="full_name" style={{ color: '#6E7180' }}>
                  Company Registration Number: <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  style={{ height: '54px', width: '367px' }}
                  type="string"
                  className="form-control"
                  name="full_name"
                  placeholder="Enter The company register Number"
                  onChange={this.handleInputChange}
                />{' '}
                <span className="help-block">{validation.full_name.message}</span>{' '}
              </div>
              <br></br>
              {/* <div className={validation.phone.isInvalid && "has-error"}>
                <label htmlFor="phone">Phone(enter only 10 digit number)</label>
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">{validation.phone.message}</span>{" "}
              </div>
              <div className={validation.password.isInvalid && "has-error"}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.password.message}
                </span>{" "}
              </div>
              <div
                className={
                  validation.password_confirmation.isInvalid && "has-error"
                }
              >
                <label htmlFor="password_confirmation">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  name="password_confirmation"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.password_confirmation.message}
                </span>{" "}
              </div> */}
              {/* <button
                onClick={this.handleFormSubmit}
                className="btn btn-primary"
              >
                {" "}
                Register{" "}
              </button> */}
            </form>
          </div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />{' '}
            <label htmlFor="vehicle1">
              By submitting this form you are agreeing to Rocham&apos;s Terms & Conditions
            </label>
          </div>
          <br></br>
          <br></br>
          <div>
            <button
              style={{ backgroundColor: '#F0A938', border: 'none', width: 'inherit' }}
              onClick={this.handleFormSubmit}
              className="btn btn-primary"
            >
              {' '}
              Submit{' '}
            </button>
          </div>{' '}
        </div>
      </div>
      //     </div>
      //   </div>
    )
  }
}
export default App
