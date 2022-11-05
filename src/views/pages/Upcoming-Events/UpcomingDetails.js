import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { FaFilter, FaPlus, FaImages } from 'react-icons/fa'
import Logo from '../../../assets/img/rectangle.png'
import styles from './styles.module.css'

const EventDetails = () => {
  //   const baseURL = 'http://134.209.222.109:3000/user/get-pastevents-list'
  const [post, setPost] = useState([])

  //   React.useEffect(() => {
  //     axios.get(baseURL).then((response) => {
  //       setPost(response.data)
  //     })
  //   }, [])

  //   if (!post) return null
  //   console.log(post)
  //   console.log(post?.pastEvents)

  // const handleChange = (value) => {
  //   setPost(value)
  // }

  const getApiCall = async () => {
    await axios
      .get('http://134.209.222.109:3000/user/get-upcomingevents-list', {
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
        setPost(response.data.userlist)
        console.log(response.data.userlist)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  useEffect(() => {
    getApiCall()
  }, [post])

  return (
    <>
      {/* {post?.map((item, index) => { */}
      {/* return ( */}
      <div>
        <div className="text-right">
          {/* <button className={`btn ${styles.btn}`} style={{ margin: '0rem 1rem' }}>
					<FaFilter style={{ margin: '0rem 0.3rem' }} />
					filters
				</button>
				<button className={`btn ${styles.btn}`} style={{ width: '9.8rem' }}>
					<FaPlus style={{ margin: '0rem 0.3rem' }} />
					create event
				</button> */}
        </div>
        <div className={`card mt-3 ${styles.card}`}>
          <div className={`card-body`}>
            <div>
              <h5
                className={`form-label ${styles.eventLabel}`}
                style={{ color: 'black', fontWeight: '500' }}
              >
                event deatils
              </h5>
            </div>
          </div>
        </div>
        {post && post.length > 0 ? (
          post.map((el) => {
            return (
              <>
                <div className={`card mt-3 ${styles.card}`}>
                  <div className={`card-body`}>
                    <div>
                      <h5
                        className={`form-label ${styles.eventLabel}`}
                        style={{ color: 'black', fontWeight: '500' }}
                      >
                        event Name : {el.name ? el.name : 'NA'}
                      </h5>

                      <label className={`${styles.eventLabel}`}>event photo</label>
                    </div>
                    <div>
                      <div className="cardody-container">
                        <img src={el.image ? el.image : 'NA'} className="img-fluid" alt="logo" />
                      </div>
                      <div className="mt-3 row">
                        <label className={`col-sm-4 col-form-label ${styles.eventLabelDetails}`}>
                          event name
                        </label>
                        <div className="col-sm-8">
                          <label className={`col-sm-4 col-form-label ${styles.eventLabel}`}>
                            {el.name ? el.name : 'NA'}
                          </label>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label className={`col-sm-4 col-form-label ${styles.eventLabelDetails}`}>
                          event description
                        </label>
                        <div className="col-sm-8">
                          <label className={`col-sm-12 col-form-label ${styles.eventLabel}`}>
                            {el.description ? el.description : 'NA'}
                          </label>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label className={`col-sm-4 col-form-label ${styles.eventLabelDetails}`}>
                          event start time
                        </label>
                        <div className="col-sm-8">
                          {/* <label className={`col-sm-4 col-form-label ${styles.eventLabel}`}>ixiono</label> */}

                          <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              {el.startTime ? (
                                el.startTime
                              ) : (
                                <input
                                  type="date"
                                  className="form-control"
                                  style={{ border: 'none', background: 'none' }}
                                />
                              )}{' '}
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              {el.startTimeInEpoch ? (
                                el.startTimeInEpoch
                              ) : (
                                <input
                                  type="date"
                                  className="form-control"
                                  style={{ border: 'none', background: 'none' }}
                                />
                              )}{' '}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label className={`col-sm-4 col-form-label ${styles.eventLabelDetails}`}>
                          event end time
                        </label>
                        <div className="col-sm-8">
                          <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              {el.endTime ? (
                                el.endTime
                              ) : (
                                <input
                                  type="date"
                                  className="form-control"
                                  style={{ border: 'none', background: 'none' }}
                                />
                              )}{' '}
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              {el.endTimeInEpoch ? (
                                el.endTimeInEpoch
                              ) : (
                                <input
                                  type="date"
                                  className="form-control"
                                  style={{ border: 'none', background: 'none' }}
                                />
                              )}{' '}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/*   <div className="mb-3 row">
                        <label className={`col-sm-4 col-form-label ${styles.eventLabelDetails}`}>
                          event description
                        </label>
                        <div className="col-sm-8">
                          <label className={`col-sm-12 col-form-label ${styles.eventLabel}`}>
                            akshya nagar 1st block 1st cross,ramamurthy nagar,banglore-560016
                          </label>
                        </div>
                      </div>*/}
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
      {/* ) })} */}
    </>
  )
}

export default React.memo(EventDetails)
