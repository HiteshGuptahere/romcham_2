import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { FaFilter, FaPlus, FaUpload, FaPenSquare } from 'react-icons/fa'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const PastEvents = () => {
  const [file, setFile] = useState([])

  const handleFile = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]))
    const formData = new FormData()
    formData.append('fileupload', event.target.files[0])

    fetch('http://134.209.222.109:3000/user/addImagesInPastEvent/1', {
      method: 'POST',

      body: formData,
      dataType: 'jsonp',
    })
  }

  //   const baseURL = 'http://134.209.222.109:3000/user/get-pastevents-list'
  const [post, setPost] = React.useState([])

  //   React.useEffect(() => {
  //     axios.get(baseURL).then((response) => {
  //       setPost(response.data)
  //     })
  //   }, [])

  //   if (!post) return null
  //   console.log(post)
  //   console.log(post?.pastEvents)

  const handleChange = (value) => {
    setPost(value)
  }

  useEffect(() => {
    axios
      .get('http://134.209.222.109:3000/user/get-pastevents-list', {
        headers: { 'Content-Type': 'application/json' },
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RpbmdAZ21haWwuY29tIiwiaXNVc2VyIjp0cnVlLCJpYXQiOjE2NjYxNzc2MDIsImV4cCI6MTY2NjI2NDAwMn0.WJ-5g_xSpc3DHpDaKSeaSlSnIU65__HfizsDiuDGKz4`,
        // withCredentials: true,
      })
      .then((response) => {
        const sample = []
        for (let i = 0; i < response.data.length; i++) {
          sample.push(response.data[i].user)
        }
        console.log(response.data, 'data')
        console.log(response.data?.userlist, 'data')
        setPost(response.data?.userlist)
      })
  }, [])

  return (
    <>
      <div>
        <div className="text-right"></div>
        <div className={`card mt-3 ${styles.card}`}>
          <div className={`card-body`} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h5
                className={`form-label ${styles.eventLabel}`}
                style={{ color: 'black', fontWeight: '500' }}
              >
                Event Details
              </h5>
            </div>
            <div>
              <img src={file} />
              <FaUpload />
              <input type="file" required="required" onChange={handleFile} />
            </div>
          </div>
        </div>
        {post?.map((item, index) => {
          console.log(item, 'data123')
          return (
            <div key={index} className={`card mt-3 ${styles.card}`}>
              <div className={`card-body`}>
                <div>
                  <h5
                    className={`form-label ${styles.eventLabel}`}
                    style={{ color: 'black', fontWeight: '500' }}
                  >
                    event deatils
                  </h5>
                </div>
                <div style={{ float: 'right' }}>
                  <Link to="/page/editevent">
                    {' '}
                    <FaPenSquare />
                  </Link>
                </div>

                <div className="mt-3 row">
                  <label className={`col-sm-4 col-form-label ${styles.eventLabelDetails}`}>
                    event name
                  </label>
                  <div className="col-sm-8">
                    <label className={`col-sm-4 col-form-label ${styles.eventLabel}`}>
                      {item.name}
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
                        <div>
                          {item.startTime ? (
                            item.startTime
                          ) : (
                            <input
                              type="date"
                              className="form-control"
                              style={{ border: 'none', background: 'none' }}
                            />
                          )}{' '}
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div>
                          {item.startTimeInEpoch ? (
                            item.startTimeInEpoch
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
                </div>
                <div className="mb-3 row">
                  <label className={`col-sm-4 col-form-label ${styles.eventLabelDetails}`}>
                    event end time
                  </label>
                  <div className="col-sm-8">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        {item.endTime ? (
                          item.endTime
                        ) : (
                          <input
                            type="date"
                            className="form-control"
                            style={{ border: 'none', background: 'none' }}
                          />
                        )}{' '}
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        {item.endTimeInEpoch ? (
                          item.endTimeInEpoch
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
                    event description
                  </label>
                  <div className="col-sm-8">
                    <label className={`col-sm-12 col-form-label ${styles.eventLabel}`}>
                      {item.description}
                    </label>
                  </div>
                </div>
                <div>
                  <label className={`${styles.eventLabel}`}>event photo</label>
                  <div className={`${styles.eventImg}`}>
                    <div className={`${styles.upImg}`}>
                      <img
                        style={{ height: '10rem', width: '44rem', marginLeft: '-17rem' }}
                        src={item.image ? item.image : 'NA'}
                        alt="img"
                        className=""
                      />
                      {/* <FaImages />
                    <h5>Draw & Drop image here</h5> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default PastEvents
