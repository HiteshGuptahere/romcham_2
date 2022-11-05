import React from 'react'
import { FaUserAlt, FaLockOpen, FaEye } from 'react-icons/fa'
import mask from './assets/mask.png'
import styles from './registration.module.css'
import pic8 from './assets/pic8.png'
import pic9 from './assets/pic9.png'
import NavBar from '../../../components/NavBar'
import Footer from '../footer/Footer'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'

const Register = () => {
  return (
    <>
      <NavBar />
      <div className={`${styles.loginPosition}`}>
        <img
          src={mask}
          className={`img-fluid w-100`}
          alt="banner1"
          style={{ marginTop: '-6rem' }}
        />
        <div className={`${styles.bannerHeadAlign}`}>
          <h2 className={`${styles.bannerHead}`}>Register</h2>
        </div>
        <div className={`${styles.memberHeight}`}>
          <div style={{ position: 'relative' }}>
            <img src={pic9} alt="pic7" className={`w-100 ${styles.orangeBanner}`} />
            <img src={pic8} alt="pic8" className={`${styles.whiteBanner}`} />
            <Row className="mb-5" style={{ marginTop: '-4rem' }}>
              <Col className="col-3"></Col>
              <Col className="col-6">
                <Card className="shadow p-3 mb-5 bg-body rounded">
                  <Card.Body>
                    <Form>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Company Name:</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Pls Enter The Name of The company."
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Representative&apos;s Email Address</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Pls Enter the Representative's Email Address"
                            />
                            {/* <Form.Text className="text-muted">
                              We&apos;ll never share your email with anyone else.
                            </Form.Text> */}
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Area of Business:</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Business Industry" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Number Of Employees: </Form.Label>
                            <Form.Control type="email" placeholder="Enter Number Of Employees" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name of Co&apos;s Representative:*</Form.Label>
                            <Form.Control type="email" placeholder="Enter Number Of Employees" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Company Registration Number:</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Business Industry" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Company Registration Number:&nbsp;&nbsp;</Form.Label>
                            <Form.Check
                              inline
                              label="SGD10M"
                              name="group1"
                              type="radio"
                              id={`inline-radio-2`}
                            />
                            <Form.Check inline label="SGD10M" type="radio" id={`inline-radio-3`} />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Membership Category:&nbsp;&nbsp;</Form.Label>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Row className="text-left">
                              <Col>
                                <Form.Check
                                  inline
                                  label="Diamond (10.000 SGD / 12 Months)"
                                  name="group1"
                                  type="radio"
                                  id={`inline-radio-2`}
                                />
                              </Col>
                              <Col>
                                <Form.Check
                                  inline
                                  label="Diamond (10.000 SGD / 12 Months)"
                                  type="radio"
                                  id={`inline-radio-3`}
                                />
                              </Col>
                            </Row>
                            <Row className="text-left">
                              <Col>
                                <Form.Check
                                  inline
                                  label="Major Supporter (2800 SGD / 12 Months)"
                                  name="group1"
                                  type="radio"
                                  id={`inline-radio-2`}
                                />
                              </Col>
                              <Col>
                                <Form.Check
                                  inline
                                  label="Major Supporter (2800 SGD / 12 Months)"
                                  type="radio"
                                  id={`inline-radio-3`}
                                />
                              </Col>
                            </Row>
                            <Row className="text-left">
                              <Col>
                                <Form.Check
                                  inline
                                  label="SME (700SGD / 12 Months)"
                                  name="group1"
                                  type="radio"
                                  id={`inline-radio-2`}
                                />
                              </Col>
                              <Col>
                                <Form.Check
                                  inline
                                  label="SME (700SGD / 12 Months)"
                                  type="radio"
                                  id={`inline-radio-3`}
                                />
                              </Col>
                            </Row>
                            <Row className="text-left">
                              <Col>
                                <Form.Check
                                  inline
                                  label="Individual (380SGD / 12 Months)"
                                  name="group1"
                                  type="radio"
                                  id={`inline-radio-2`}
                                />
                              </Col>
                              <Col>
                                <Form.Check
                                  inline
                                  label="Individual (380SGD / 12 Months)"
                                  type="radio"
                                  id={`inline-radio-3`}
                                />
                              </Col>
                            </Row>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row className="text-left">
                        <Col>
                          <Form.Check
                            inline
                            label="By submitting this form you are agreeing to Rocham's Terms & Conditions"
                            name="group1"
                            type="checkbox"
                            id={`inline-radio-2`}
                          />
                        </Col>
                      </Row>
                      <Row className="text-center mt-2">
                        <Col>
                          <Button variant="primary">Submit</Button>
                        </Col>
                      </Row>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-3"></Col>
            </Row>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', marginTop: '3rem' }}>
        <div className="w-100">
          <Row>
            <Col className="col-2"></Col>
            <Col>
              <div className={`${styles.backgroundHr} ${styles.greenBanner}`}>
                <Row className="pt-5 pl-3">
                  <Col className="text-uppercase text-white">
                    <h1>need help to decide?</h1>
                    <h5>contact managemaent and develpement team</h5>
                  </Col>
                  <Col>
                    <div className={`${styles.greenBtnAlign}`}>
                      <button className={`btn btn-primary ${styles.greenBtn}`}>contact us</button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Register
