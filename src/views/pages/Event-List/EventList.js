import React, { useEffect } from 'react'
import { FaFilter, FaPlus, FaArrowDown } from 'react-icons/fa'
import Logo from '../../../assets/img/rectangle.png'
import profile from '../../../assets/img/profile.png'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
// import { logo } from 'src/assets/brand/logo'

const EventList = () => {
  // http://134.209.222.109:3000/user/get-events-list
  // http://134.209.222.109:3000/user/login
  const [Post, setPost] = useState([])
  const [Data, setData] = useState([])

  const getApiCall = async () => {
    await axios
      .get('http://134.209.222.109:3000/user/get-events-list', {
        headers: { 'Content-Type': 'application/json' },
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RpbmdAZ21haWwuY29tIiwiaXNVc2VyIjp0cnVlLCJpYXQiOjE2NjYxNzc2MDIsImV4cCI6MTY2NjI2NDAwMn0.WJ-5g_xSpc3DHpDaKSeaSlSnIU65__HfizsDiuDGKz4`,
        // withCredentials: true,
      })
      .then((response) => {
        // const sample = []
        // for (let i = 0; i < response.data.length; i++) {
        //   sample.push(response.data[i].user)
        // }
        console.log(response.data, 'data')
        // console.log(response.data?.upcomingEvents, 'data')
        setPost(response.data.eventslist)
        console.log(response.data.eventslist)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getApiCall()
  }, [Post])
  return (
    <>
      <div>
        <div className="d-flex justify-content-between">
          <div className="">
            <Link to="/page/past-events">
              <button className={`btn ${styles.btnPast}`} style={{ margin: '0rem 1rem' }}>
                past events
              </button>
            </Link>
            <Link to="/page/upcomingevents">
              <button className={`btn ${styles.btnUpcoming}`} style={{ width: '9.8rem' }}>
                upcoming events
              </button>
            </Link>
          </div>
          <div className="">
            <button className={`btn ${styles.btn}`} style={{ margin: '0rem 1rem' }}>
              <FaFilter style={{ margin: '0rem 0.3rem' }} />
              filters
            </button>
            <Link to="/page/create-event">
              <button className={`btn ${styles.btn}`} style={{ width: '9.8rem' }}>
                <FaPlus style={{ margin: '0rem 0.3rem' }} />
                create event
              </button>
            </Link>
          </div>
        </div>
        <>
          {Post && Post.length > 0 ? (
            Post.map((el) => {
              return (
                <>
                  <div className={`card mt-3 ${styles.card}`}>
                    <div className={`card-body`}>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="d-flex">
                          <div>
                            <img src={el.image ? el.image : 'NA'} alt="profile" width="70rem" />
                          </div>

                          <div style={{ padding: '0rem 2rem' }}>
                            <h5 style={{ textTransform: 'capitalize', fontWeight: '500' }}>
                              {' '}
                              {el.name ? el.name : 'NA'}
                            </h5>
                            <p style={{ textTransform: 'capitalize', color: '#C2C2C2' }}>
                              id: {el.id ? el.id : 'NA'}
                            </p>
                          </div>
                        </div>

                        <div>
                          <FaArrowDown style={{ cursor: 'pointer' }} />
                        </div>
                      </div>
                      <div className="mt-4">
                        <img src={Logo} className="img-fluid" alt="logo" />
                      </div>
                      <div className="card mt-3 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-4">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                              <div>
                                <h6 className={`${styles.heading}`}>
                                  {' '}
                                  {el.startTime ? el.startTime : 'NA'}
                                </h6>
                              </div>
                            </div>

                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                              <div className={`${styles.cardHead}`}>
                                <h5 style={{ fontWeight: '600' }}>{el.name ? el.name : 'NA'}</h5>
                                <p style={{ textTransform: 'capitalize', fontWeight: 'normal' }}>
                                  1 going - 0 intersted
                                </p>
                              </div>
                            </div>

                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                              <div className="text-right">
                                <Link
                                  className={`btn ${styles.btn}`}
                                  style={{ width: '9.8rem' }}
                                  to="/page/upcoming-events"
                                >
                                  view details
                                </Link>
                              </div>
                            </div>
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
        </>
      </div>
    </>
  )
}

export default EventList
