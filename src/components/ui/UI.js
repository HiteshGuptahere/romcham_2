import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'
import logo from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.png'
import pic4 from '../../assets/pic4.png'
import pic5 from '../../assets/pic5.png'
import pic6 from '../../assets/pic6.png'
import pic7 from '../../assets/pic7.png'
import pic8 from '../../assets/pic8.png'
import pic9 from '../../assets/pic9.png'
import pic10 from '../../assets/pic10.png'
import pic11 from '../../assets/pic11.png'
import pic12 from '../../assets/pic12.png'
import pic13 from '../../assets/pic13.png'
import pic14 from '../../assets/pic14.png'
import {
  FaCalendarAlt,
  FaMinus,
  FaUserAlt,
  FaCopyright,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaLessThan,
  FaGreaterThan,
} from 'react-icons/fa'
import styles from './styles.module.css'
import Service from '../slider/Service.js'

const Ui = () => {
  const [dateState, setDateState] = useState(new Date())
  const [post, setPost] = useState([])
  const [news, setNews] = useState([])
  const changeDate = (e) => {
    setDateState(e)
  }
  const getApiCall = async () => {
    await axios
      .get(' http://134.209.222.109:3000/user/fillRule=', {
        headers: { 'Content-Type': 'application/json' },
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RpbmdAZ21haWwuY29tIiwiaXNVc2VyIjp0cnVlLCJpYXQiOjE2NjYxNzc2MDIsImV4cCI6MTY2NjI2NDAwMn0.WJ-5g_xSpc3DHpDaKSeaSlSnIU65__HfizsDiuDGKz4`,
        // withCredentials: true,
      })
      .then((response) => {
        // const sample = []
        // for (let i = 0; i < response.data.length; i++) {
        //   sample.push(response.data[i].user)
        // }
        setPost(response.data?.membership)
        setNews(response.data?.news)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getApiCall()
  })
  return (
    <>
      <div className="servicebackground">
        {/* <div>
                    <img src={pic2} alt="pic2" className="w-100" />
                </div> */}
        {/* <div> */}
        <Service />
        {/* </div> */}
      </div>
      <div className={`container-fluid ${styles.fluid}`}>
        <h3 className={`${styles.eventHead}`}>our events</h3>
        <div className={`${styles.cardResponsive} `}>
          <div className="row mt-5">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
              <div className={`card mt-2 shadow ${styles.card}`}>
                <div className="card-body">
                  <h5 className="text-capitalize">today event</h5>
                  <Calendar value={dateState} onChange={changeDate} />
                  <div className="mt-2">
                    <img src={pic2} alt="pic2" className="w-100" />
                    <h6 className="text-capitalize mt-4">toby mac concert</h6>
                    <div className="d-flex">
                      <div>
                        <p>
                          <FaUserAlt className={`${styles.fontawesome}`} /> <span>2</span>
                        </p>
                      </div>
                      <div className="ms-3">
                        <p>
                          {' '}
                          <FaCalendarAlt className={`${styles.fontawesome}`} />{' '}
                          <b>{moment(dateState).format('MMMM Do YYYY')}</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
              <div className={`card mt-2 shadow ${styles.card}`}>
                <div className="card-body">
                  <img src={pic3} alt="pic3" className="w-100" />
                  <h6 className="text-capitalize mt-4">talson 8th birthday</h6>
                  <div className="d-flex">
                    <div>
                      <p>
                        <FaUserAlt className={`${styles.fontawesome}`} /> <span>2</span>
                      </p>
                    </div>
                    <div className="ms-3">
                      <p>
                        {' '}
                        <FaCalendarAlt className={`${styles.fontawesome}`} /> July 7,2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`card mb-5 mt-4 shadow ${styles.card}`}>
                <div className="card-body">
                  <img src={pic2} alt="pic2" className="w-100" />
                  <h6 className="text-capitalize mt-4">friends occasion</h6>
                  <div className="d-flex">
                    <div>
                      <p>
                        <FaUserAlt className={`${styles.fontawesome}`} /> <span>2</span>
                      </p>
                    </div>
                    <div className="ms-3">
                      <p>
                        {' '}
                        <FaCalendarAlt className={`${styles.fontawesome}`} /> July 7,2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
              <div className={`card shadow ${styles.card}`}>
                <div className="card-body">
                  <img src={pic4} alt="pic4" className="w-100" style={{ height: '11rem' }} />
                  <h6 className="text-capitalize mt-4">friends occasion</h6>
                  <div className="d-flex">
                    <div>
                      <p>
                        <FaUserAlt className={`${styles.fontawesome}`} /> <span>2</span>
                      </p>
                    </div>
                    <div className="ms-3">
                      <p>
                        {' '}
                        <FaCalendarAlt className={`${styles.fontawesome}`} /> July 7,2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`card mb-5 mt-4 shadow ${styles.card}`}>
                <div className="card-body">
                  <img src={pic5} alt="pic5" className="w-100" style={{ height: '7rem' }} />
                  <h6 className="text-capitalize mt-4">friends occasion</h6>
                  <div className="d-flex">
                    <div>
                      <p>
                        <FaUserAlt className={`${styles.fontawesome}`} /> <span>2</span>
                      </p>
                    </div>
                    <div className="ms-3">
                      <p>
                        {' '}
                        <FaCalendarAlt className={`${styles.fontawesome}`} /> July 7,2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Latest News */}
      <div className={`container-fluid mt-5`}>
        <h3 className={`${styles.eventHead}`}>latest news</h3>
        <div className={`${styles.cardResponsive} `}>
          <div className="row mt-5">
            {news && news.length > 0 ? (
              news.map((el) => {
                return (
                  <>
                    <div key={el.id} className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                      <div className={`card mt-2 shadow ${styles.card1}`}>
                        <div className="card-body">
                          <img
                            src={el.image ? el.image : 'NA'}
                            alt="pic2"
                            className={`w-100 ${styles.picHeight}`}
                          />
                          <h6 className="text-capitalize mt-4">{el.title ? el.title : 'Na'}</h6>
                          <div className="d-flex">
                            <div>
                              <p>
                                <FaUserAlt className={`${styles.fontawesome}`} />{' '}
                                <span>by {el.postedBy ? el.postedBy : 'NA'}</span>
                              </p>
                            </div>
                            <div className="ms-3">
                              <p>
                                {' '}
                                <FaCalendarAlt className={`${styles.fontawesome}`} />
                                {el.date ? el.date : 'Na'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            ) : (
              <>
                <h2>No Events</h2>
              </>
            )}
          </div>
        </div>
      </div>

      {/* MEMBERS PLAN */}
      <div className={`${styles.memberHeight}`}>
        <div style={{ position: 'relative' }} className="">
          <img src={pic9} alt="pic7" style={{}} className={`w-100 ${styles.orangeBanner}`} />
          <img src={pic8} alt="pic8" className={`${styles.whiteBanner}`} />
          <div className={`${styles.cardHead} ${styles.eventHead}`}>
            <h3>our members plan</h3>
          </div>
          <div className={`${styles.cardType}`}>
            <div className="row mt-4">
              <div
                className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-inline-flex"
                style={{ justifyContent: 'space-between' }}
              >
                {post && post.length > 0 ? (
                  post.map((el) => {
                    return (
                      <>
                        <div className={`card mt-5 mx-2`} style={{ minWidth: '10rem' }}>
                          <div className={`card-header ${styles.cardHead2}`}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '2rem 0rem',
                              }}
                            >
                              <FaMinus />
                              <h6 className={`${styles.cardHeadName}`}>
                                {el.membership_name ? el.membership_name : 'Na'}
                                <br></br>{' '}
                                <span
                                  style={{
                                    color: '#4E6FB7',
                                    fontWeight: '700',
                                    marginLeft: '1rem',
                                  }}
                                >
                                  {el.price ? el.price : 'Na'}
                                </span>
                              </h6>
                              <FaMinus />
                            </div>
                          </div>
                          <div className={`card-body`} style={{ position: 'relative' }}>
                            <div>
                              <p
                                style={{
                                  color: '#979797',
                                  textTransform: 'capitalize',
                                }}
                              >
                                {el.description ? el.description : 'Na'}
                              </p>
                            </div>
                            <div className="text-center mt-5">
                              <p
                                style={{
                                  fontWeight: '700',
                                  color: '#002146',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {el.price_per_year ? el.price_per_year : 'Na'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                ) : (
                  <>
                    <h2>No Events</h2>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* type of members */}
      <div>
        <div className={`mt-5 ${styles.typeOfMembers}`} style={{ backgroundColor: '#FFFAF4' }}>
          <div className={`mb-4 ${styles.typeflex}`}>
            <h6>diomond members</h6>
            <div className="d-flex">
              <div className="me-2">
                <FaLessThan className={`${styles.faless}`} />
              </div>
              <div>
                <FaGreaterThan className={`${styles.fagrat}`} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-end">
              <img src={pic11} className={`img-fluid w-75`} alt="pic11" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-end">
              <img src={pic12} className={`img-fluid w-75`} alt="pic12" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-end">
              <img src={pic13} className={`img-fluid w-50`} alt="pic13" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-end">
              <img src={pic14} className={`img-fluid w-50`} alt="pic14" />
            </div>
          </div>
        </div>
        <div className={`mt-5 ${styles.typeOfMembers}`}>
          <div className={`mb-4 ${styles.typeflex}`}>
            <h6>gold members</h6>
            <div className="d-flex">
              <div className="me-2">
                <FaLessThan className={`${styles.faless}`} />
              </div>
              <div>
                <FaGreaterThan className={`${styles.fagrat}`} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-end">
              <img src={pic11} className={`img-fluid w-75`} alt="pic11" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-end">
              <img src={pic12} className={`img-fluid w-75`} alt="pic12" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-end">
              <img src={pic13} className={`img-fluid w-50`} alt="pic13" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-end">
              <img src={pic14} className={`img-fluid w-50`} alt="pic14" />
            </div>
          </div>
        </div>
        <div className={`mt-5 ${styles.typeOfMembers}`} style={{ backgroundColor: '#FFFAF4' }}>
          <div className={`mb-4 ${styles.typeflex}`}>
            <h6>corporate members</h6>
            <div className="d-flex">
              <div className="me-2">
                <FaLessThan className={`${styles.faless}`} />
              </div>
              <div>
                <FaGreaterThan className={`${styles.fagrat}`} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-end">
              <img src={pic11} className={`img-fluid w-75`} alt="pic11" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-end">
              <img src={pic12} className={`img-fluid w-75`} alt="pic12" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-end">
              <img src={pic13} className={`img-fluid w-50`} alt="pic13" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-end">
              <img src={pic14} className={`img-fluid w-50`} alt="pic14" />
            </div>
          </div>
        </div>
      </div>
      {/* post requirements       */}
      <div className="text-center mt-5">
        <h2 style={{ color: '#FDCB19', textTransform: 'uppercase' }}>post business requirements</h2>
        <div className={`mb-3 ${styles.committeeBtnAlign}`}>
          <button className={`btn btn-primary ${styles.committeeBtn}`}>post</button>
        </div>
      </div>
      {/* three banners */}
      <div className={`${styles.threeBanner}`}>
        <div className="container-fluid" style={{ position: 'relative' }}>
          <div className={`row ${styles.headRow}`}>
            <div className="col-6">
              <img src={pic10} alt="pic10" className="w-100" />
            </div>

            <div className="col-6">
              <img src={pic9} alt="pic9" className={`w-100 ${styles.blueBanner}`} />
            </div>
          </div>
          <div className={`${styles.secWhitebanner}`}>
            <img src={pic8} alt="pic8" className={`${styles.secWhitebannerAlign}`} />
          </div>
          <div className={`${styles.greenBanner}`}>
            <img
              src={pic9}
              alt="pic9"
              className={` ${styles.greenBannerAlign}`}
              style={{
                background: '#7FA53D',
                maxHeight: '37vh',
                width: '100%',
                position: 'absolute',
              }}
            />
          </div>

          <div className={`${styles.headquarters}`}>
            <h4>headquarters</h4>
            <address>
              168,Robinson Road,<br></br>#12-01,capital tower,<br></br>
              <span style={{ textTransform: 'uppercase' }}>singapore 068912</span>
            </address>
          </div>

          <div className={`${styles.whiteBannerText}`}>
            <div className={`${styles.whiteBannerAlign}`}>
              <h5>better business .</h5>
              <h4>better together</h4>
            </div>
            <div className={`${styles.committeeBtnAlign}`}>
              <button className={`btn btn-primary ${styles.committeeBtn}`}>
                create a committee
              </button>
            </div>
          </div>

          <div className={`${styles.greenBannerText}`}>
            <div className={`${styles.greenBannerAlign}`}>
              <h1>need help to decide?</h1>
              <h5>contact managemaent and develpement team</h5>
            </div>

            <div className={`${styles.greenBtnAlign}`}>
              <button className={`btn btn-primary ${styles.greenBtn}`}>contact us</button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div
        style={{
          backgroundColor: '#4E6FB7',
          zIndex: '1',
          position: 'relative',
        }}
        className={`${styles.footerDesign}`}
      >
        <div style={{ borderRight: '1px solid white', paddingRight: '2rem' }}>
          <h6>
            <span style={{ paddingRight: '0.5rem' }}>
              <FaCopyright />
            </span>
            2022 romcham singapore all rights reserverd
          </h6>
        </div>

        <div style={{ borderRight: '1px solid white', paddingRight: '2rem' }}>
          <a href="/">Vision</a>
          <a href="/">Benifits</a>
          <a href="/">Membership</a>
          <a href="/">Contact</a>
        </div>

        <div>
          <label>
            contact us: <FaPhoneAlt style={{ margin: '0rem 0.7rem' }} /> 1-234 56789 0
          </label>
          <a href="/">support@romchamsigapore.com</a>
          <FaFacebookF style={{ color: 'white', marginRight: '0.5rem' }} />
          <FaInstagram style={{ color: 'white' }} />
        </div>
      </div>
    </>
  )
}

export default React.memo(Ui)
