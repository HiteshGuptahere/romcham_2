import React from 'react'
import pic2 from './assets/pic2.png'
import pic3 from './assets/pic3.png'
import pic4 from './assets/pic4.png'
import pic5 from './assets/pic5.png'
import pic6 from './assets/pic6.png'
import styles from './latestnews.module.css'
import { FaCalendarAlt, FaUserAlt } from 'react-icons/fa'
const LatestNews = () => {
  return (
    <div className={`container-fluid mt-5`}>
      <h6 className={`${styles.eventHead}`}>events :</h6>
      <div className={`${styles.cardResponsive} `}>
        <div className="row mt-5">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
            <div className={`card mt-2 shadow ${styles.card1}`}>
              <div className="card-body">
                <img src={pic2} alt="pic2" className={`w-100 ${styles.picHeight}`} />
                <h6 className="text-capitalize mt-4">why do we mark international days?</h6>
                <div className={`d-flex justify-content-between ${styles.footer}`}>
                  <div>
                    <p>
                      <FaUserAlt className={`${styles.fontawesome}`} /> <span>by Jeni</span>
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
            <div className={`card mb-5 mt-4 shadow ${styles.card1}`}>
              <div className="card-body">
                <img src={pic6} alt="pic6" className={`w-100 ${styles.picHeight}`} />
                <h6 className="text-capitalize mt-4">
                  summer time on neptune is <br></br>
                  cooler than expected
                </h6>
                <div className={`d-flex justify-content-between ${styles.footer}`}>
                  <div>
                    <p>
                      <FaUserAlt className={`${styles.fontawesome}`} /> <span>buy Jeni</span>
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
            <div className={`card mt-2 shadow ${styles.card1}`}>
              <div className="card-body">
                <img src={pic3} alt="pic3" className={`w-100 ${styles.picHeight}`} />
                <h6 className="text-capitalize mt-4">
                  the for person crew will now <br></br>
                  spend 3 days in orbit
                </h6>
                <div className={`d-flex justify-content-between ${styles.footer}`}>
                  <div>
                    <p>
                      <FaUserAlt className={`${styles.fontawesome}`} /> <span>by Jeni</span>
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
            <div className={`card mb-5 mt-4 shadow ${styles.card1}`}>
              <div className="card-body">
                <img src={pic2} alt="pic2" className={`w-100 ${styles.picHeight}`} />
                <h6 className="text-capitalize mt-4">why do we mark international days?</h6>
                <div className={`d-flex justify-content-between ${styles.footer}`}>
                  <div>
                    <p>
                      <FaUserAlt className={`${styles.fontawesome}`} /> <span>by Jeni</span>
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
            <div className={`card shadow ${styles.card1}`}>
              <div className="card-body">
                <img src={pic4} alt="pic4" className={`w-100 ${styles.picHeight}`} />
                <h6 className="text-capitalize mt-4">friends occasion</h6>
                <div className={`d-flex justify-content-between ${styles.footer}`}>
                  <div>
                    <p>
                      <FaUserAlt className={`${styles.fontawesome}`} /> <span>by Jeni</span>
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

            <div className={`card mb-5 mt-4 shadow ${styles.card1}`}>
              <div className="card-body">
                <img src={pic5} alt="pic5" className={`w-100 ${styles.picHeight}`} />
                <h6 className="text-capitalize mt-4">friends occasion</h6>
                <div className={`d-flex justify-content-between ${styles.footer}`}>
                  <div>
                    <p>
                      <FaUserAlt className={`${styles.fontawesome}`} /> <span>by Jeni</span>
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
  )
}

export default LatestNews
