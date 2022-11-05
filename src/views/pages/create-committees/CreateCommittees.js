import React, { useState, useEffect } from 'react'
import mask from './assets/mask.png'
import styles from './createCommittes.module.css'
import pic8 from './assets/pic8.png'
import pic9 from './assets/pic9.png'
import NavBar from '../../../components/NavBar'
import Footer from '../footer/Footer'
import { TbAlertCircle } from 'react-icons/tb'
import axios from 'axios'
import { Link } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Login1 = () => {
  // http://134.209.222.109:3000/user/get-committee-list
  const [post, setPost] = useState([])

  const getApiCall = async () => {
    await axios
      .get('http://134.209.222.109:3000/user/get-committee-list', {
        headers: { 'Content-Type': 'application/json' },
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RpbmdAZ21haWwuY29tIiwiaXNVc2VyIjp0cnVlLCJpYXQiOjE2NjYxNzc2MDIsImV4cCI6MTY2NjI2NDAwMn0.WJ-5g_xSpc3DHpDaKSeaSlSnIU65__HfizsDiuDGKz4`,
        // withCredentials: true,
      })
      .then((response) => {
        // const sample = []
        // for (let i = 0; i < response.data.length; i++) {
        //   sample.push(response.data[i].user)
        // }
        setPost(response.data.committee)
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
      <NavBar />
      <div className={`${styles.loginPosition}`}>
        <img src={mask} className={`img-fluid w-100 ${styles.ig}`} alt="banner1" />
        <div className={`${styles.bannerHeadAlign}`}>
          <h2 className={`${styles.bannerHead}`}>create committees</h2>
        </div>
        <div className={`${styles.memberHeight}`}>
          <div style={{ position: 'relative' }}>
            <img src={pic9} alt="pic7" className={`w-100 ${styles.orangeBanner}`} />
            <img src={pic8} alt="pic8" className={`${styles.whiteBanner}`} />

            <div className="row mb-3">
              <div className="col-3"></div>
              <div className="col-6">
                <div className={`card mb-3`}>
                  <div className={`card-body`}>
                    <div className={`text-center`}>
                      <h5>Committees</h5>
                      <p>
                        You are already a member of these
                        <br /> Rochamp Committee
                      </p>
                      <br />

                      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        {post && post.length > 0
                          ? post.map((item, index) => (
                              <ListItem alignItems="flex-start" key={index}>
                                <ListItemAvatar>
                                  <Avatar alt="Loading..." src={item.image} />
                                </ListItemAvatar>
                                <ListItemText
                                  primary={item.committee_name ? item.committee_name : 'NA'}
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                      >
                                        {item.email ? item.email : 'NA'}
                                      </Typography>
                                      {item.description ? item.description : 'Lorem Ipsum'}
                                    </React.Fragment>
                                  }
                                />
                                <div className="row">
                                  <div className="col">
                                    <Link
                                      className="nav-link"
                                      aria-current="page"
                                      to={`/newcommittees/${item.id}`}
                                    >
                                      <Button variant="text" className="text-capitalize">
                                        details
                                      </Button>
                                    </Link>
                                  </div>
                                </div>
                              </ListItem>
                            ))
                          : null}
                      </List>
                      {/* {post && post.length > 0
                        ? post.map((item, index) => (
                            <div key={index} className={`${styles.sectionCommitee}`}>
                              <ul>
                                <li>
                                  <Link
                                    className="nav-link"
                                    aria-current="page"
                                    to={`/newcommittees/${item.id}`}
                                  >
                                    <span>
                                      <TbAlertCircle />
                                    </span>
                                    {item.committee_name ? item.committee_name : 'NA'}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          ))
                        : ''} */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: '8rem', position: 'relative' }}>
        <div>
          <img src={pic9} alt="pic7" className={`w-100 ${styles.greenBanner}`} />
        </div>

        <div className={`${styles.greenBannerText}`}>
          <div>
            <h1>need help to decide?</h1>
            <h5>contact managemaent and develpement team</h5>
          </div>

          <div className={`${styles.greenBtnAlign}`}>
            <button className={`btn btn-primary ${styles.greenBtn}`}>contact us</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login1
