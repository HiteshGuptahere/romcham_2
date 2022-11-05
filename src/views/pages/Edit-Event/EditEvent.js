import React, { useState, useEffect } from 'react'
import { FaFile, FaImages } from 'react-icons/fa'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import axios from 'axios'
import Button from '@mui/material/Button'
import { useLocation } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

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
  const [imageUrl, setImageUrl] = useState('')
  const locationId = useLocation()
  const [loading, setLoading] = useState(false)

  const [eventDetais, setEventDetails] = useState({
    userId: '',
    name: '',
    location: '',
    startTime: '',
    endTime: '',
    description: '',
    organizerEmail: '',
    mobileNo: '',
    addMembers: [''],
    image: '',
    files: [''],
  })

  // const handleChange = (value) => {
  //   setAddmembers(value)
  // }

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
        setEventDetails({
          userId: 1,
          name: res.data.event.name,
          location: res.data.event.location,
          startTime: res.data.event.startTime,
          endTime: res.data.event.endTime,
          description: res.data.event.description,
          organizerEmail: res.data.event.organizerEmail,
          mobileNo: res.data.event.mobileNo,
          addMembers: res.data.event.addMembers,
          image: res.data.event.image,
          files: res.data.event.files,
        })
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
    let eventId = ''

    eventId = locationId.pathname.split('/')[locationId.pathname.split('/').length - 1]
    eventDetais.files = imageUrl
    console.log(imageUrl)
    try {
      axios
        .patch(`http://134.209.222.109:3000/user/update-event/${eventId}`, eventDetais, {
          headers: { 'Content-Type': 'application/json' },
          authorization: process.env.REACT_APP_USER_KEY,
        })
        .then((res) => {
          console.log(res)
          if (res.data.status === 200) {
            alert('Asssigned sucessfully!')
          }
        })
    } catch (error) {
      if (error) {
        alert('something went wrong!')
      }
      console.log(error)
    }
  }
  const handleUpdateImage = (event) => {
    setLoading(true)
    let eventId = ''
    eventId = locationId.pathname.split('/')[locationId.pathname.split('/').length - 1]

    let formData = new FormData()

    for (let i = 0; i < event.length; i++) {
      formData.append(`files`, event[i])
    }
    return axios
      .put('http://134.209.222.109:3000/user/update-event-pics/' + eventId, formData, {
        headers: {
          authorization: '',
        },
      })
      .then((res) => {
        console.log(res.data.list)
        setImageUrl(res.data.list)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }
  return (
    <>
      {event && eventDetais && eventDetais !== null ? (
        <div className={`card ${styles.card}`}>
          <div className={`card-body`}>
            <div className="row">
              <div className="col">
                <label>Add Members</label>
                <Select
                  isMulti={true}
                  className="form-control"
                  defaultValue={eventDetais.addMembers.item}
                  onChange={(value) => setEventDetails({ ...eventDetais, addMembers: value })}
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
                      setEventDetails({ ...eventDetais, name: e.target.value })
                    }}
                    defaultValue={eventDetais.name}
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
                          placeholder="Start Time"
                          onChange={(e) => {
                            setEventDetails({
                              ...eventDetais,
                              startTime: new Date(e.target.value).toISOString(),
                            })
                          }}
                          defaultValue={formatedDate(new Date(eventDetais.startTime))}
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
                      setEventDetails({
                        ...eventDetais,
                        location: e.target.value,
                      })
                    }}
                    defaultValue={eventDetais.location}
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
                            setEventDetails({
                              ...eventDetais,
                              endTime: new Date(e.target.value).toISOString(),
                            })
                          }}
                          defaultValue={formatedDate(new Date(eventDetais.endTime))}
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
                  setEventDetails({
                    ...eventDetais,
                    description: e.target.value,
                  })
                }}
                defaultValue={eventDetais.description}
              ></textarea>
            </div>

            <div className="row mt-5 mb-3">
              <div className="col">
                <label className={`form-label`}>Organizer Deatils</label>
                <input
                  type="file"
                  multiple
                  className={`form-control ${styles.eventInput}`}
                  placeholder="Event Email address"
                  onChange={(e) => {
                    handleUpdateImage(e.target.files)
                  }}
                />
              </div>
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
                      setEventDetails({
                        ...eventDetais,
                        organizerEmail: e.target.value,
                      })
                    }}
                    defaultValue={eventDetais.organizerEmail}
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
                      setEventDetails({
                        ...eventDetais,
                        mobileNo: e.target.value,
                      })
                    }}
                    defaultValue={eventDetais.mobileNo}
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
              {loading ? (
                <div className="col text-end">
                  <Spinner animation="border" role="status" className="">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              ) : (
                <div className="col text-end">
                  <Button variant="contained" onClick={onSubmit} size="small">
                    save & preview
                  </Button>
                </div>
              )}
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
