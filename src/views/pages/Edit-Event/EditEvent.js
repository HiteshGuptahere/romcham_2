import React, { useState, useEffect } from 'react'
import { FaFile, FaImages } from 'react-icons/fa'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import axios from 'axios'
import Button from '@mui/material/Button'
import { useLocation } from 'react-router-dom'

const EditEvent = () => {
  const [addmembersList, setAddmembersList] = useState([])
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  //   const [eventdate, setEventdate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [organize, setOrganize] = useState([])
  const [description, setDescription] = useState('')
  const [mobileNo, setMobileNo] = useState(0)
  const [addmembers, setAddmembers] = useState([])
  const [event, setEvent] = useState()
  const locationId = useLocation()

  const handleChange = (value) => {
    setAddmembers(value)
  }

  const formatedDate = (inputDate) => {
    let today = new Date(inputDate)
    var date = today.toJSON().slice(0, 10)
    var nDate = date.slice(8, 10) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4)
    return nDate.split('/').reverse().join('-')
  }
  const getEventDetails = async () => {
    let eventId = ''

    eventId = locationId.pathname.split('/')[locationId.pathname.split('/').length - 1]
    await axios
      .get(`http://134.209.222.109:3000/user/view-event-details?eventId=${eventId}`, {
        headers: { 'Content-Type': 'application/json' },
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RpbmdAZ21haWwuY29tIiwiaXNVc2VyIjp0cnVlLCJpYXQiOjE2NjYxNzc2MDIsImV4cCI6MTY2NjI2NDAwMn0.WJ-5g_xSpc3DHpDaKSeaSlSnIU65__HfizsDiuDGKz4`,
      })
      .then((res) => {
        setEvent(res.data.event)
        // console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getEventDetails()
  }, [])

  //   const submit = () => {}

  const onSubmit = (e) => {
    e.preventDefault()
    try {
      axios
        .patch(
          `http://134.209.222.109:3000/user/update-event/`,
          JSON.stringify({
            addmembers,
            name,
            mobileNo,
            location,
            organize,
            startTime,
            endTime,
            description,
          }),

          {
            headers: { 'Content-Type': 'application/json' },
            // withCredentials: true,
          },
        )
        .then((res) => {
          alert('Asssigned sucessfully!')
        })
    } catch (error) {
      if (error) {
        alert('something went wrong!')
      }
      console.log(error)
    }
  }
  return (
    <>
      {event ? (
        <div className={`card ${styles.card}`}>
          <div className={`card-body`}>
            <div className="row">
              <div className="col">
                <label>Add Members</label>
                <Select
                  isMulti={true}
                  className="form-control"
                  value={addmembers.item}
                  onChange={(value) => handleChange(value)}
                  options={addmembersList}
                  getOptionLabel={(option) => option}
                  getOptionValue={(option) => option}
                />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div>
                  <label className={`form-label`}>Event name</label>

                  <input
                    type="text"
                    className={`form-control`}
                    placeholder="Event Name"
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                    defaultValue={event.name}
                  />
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <div className="row w-100">
                      <div className="col-3 mt-2">
                        <label className={`form-label`}>Start :</label>
                      </div>
                      <div className="col">
                        <input
                          type="date"
                          className={`form-control mt-1 ${styles.eventInput}`}
                          placeholder="Event Name"
                          onChange={(e) => {
                            setEndTime(new Date(e.target.value).toISOString())
                          }}
                          defaultValue={formatedDate(new Date(event.startTime))}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div>
                    <input
                      type="date"
                      className={`form-control mt-1 ${styles.eventInput}`}
                      placeholder="Event Name"
                    />
                  </div>
                </div> */}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div>
                  <label className={`form-label`}>Location</label>

                  <input
                    type="text"
                    className={`form-control ${styles.eventInput}`}
                    placeholder="Type Location..."
                    onChange={(e) => {
                      setLocation(e.target.value)
                    }}
                    defaultValue={event.location}
                  />
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <div className="row w-100">
                      <div className="col-3 mt-2">
                        <label className={`form-label`}>End : </label>
                      </div>
                      <div className="col">
                        <input
                          type="date"
                          className={`form-control mt-1 ${styles.eventInput}`}
                          placeholder="Event Name"
                          onChange={(e) => {
                            setEndTime(new Date(e.target.value).toISOString())
                          }}
                          defaultValue={formatedDate(new Date(event.startTime))}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div>
                    <input
                      type="date"
                      className={`form-control mt-1 ${styles.eventInput}`}
                      placeholder="Event Name"
                    />
                  </div>
                </div> */}
                </div>
              </div>
            </div>
            <div className="mt-3" style={{ position: 'relative' }}>
              <div className={`${styles.faupload}`}>
                <FaFile className={`${styles.FaFile}`} />
              </div>
              <textarea
                className={`form-control ${styles.textarea}`}
                placeholder="Type here..."
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
                defaultValue={event.description}
              ></textarea>
            </div>

            <div className="row mt-5 mb-3">
              <label className={`form-label`}>Organizer Deatils</label>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div>
                  <input
                    type="text"
                    className={`form-control ${styles.eventInput}`}
                    placeholder="Event Email address"
                    onChange={(e) => {
                      setOrganize(e.target.value)
                    }}
                    defaultValue={event.organizerEmail}
                  />
                </div>

                {/* <div className="c1">
                  <div className="form-check form-switch">
                    <input className={`form-check-input ${styles.eventRadio}`} type="checkbox" />
                  </div>
                  <div>
                    <label className={`form-label`} style={{ color: 'black', fontWeight: '500' }}>
                      Capture attendance
                    </label>
                  </div>
                </div> */}
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div>
                  <input
                    type="text"
                    className={`form-control ${styles.eventInput}`}
                    placeholder="phone"
                    onChange={(e) => {
                      setMobileNo(e.target.value)
                    }}
                    defaultValue={event.mobileNo}
                  />
                </div>

                <div className="c1">
                  {/* <div className="form-check form-switch">
                    <input
                      className={`form-check-input ${styles.eventRadio}`}
                      type="checkbox"
                      style={{ left: '17rem' }}
                    />
                  </div> */}
                  {/* <div>
                    <label
                      className={`form-label ${styles.eventLabel}`}
                      style={{ color: 'black', fontWeight: '500' }}
                    >
                      add external registration link
                    </label>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Link to="/page/past-events" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" size="small" onClick={() => setEvent(null)}>
                    Back
                  </Button>
                </Link>
              </div>
              <div className="col text-end">
                <Button variant="contained" onClick={onSubmit} size="small">
                  save & preview
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>No Data</h1>
      )}
    </>
  )
}

export default EditEvent
