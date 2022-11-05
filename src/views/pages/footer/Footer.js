import React from 'react'
import { FaCopyright, FaInstagram, FaFacebookF, FaPhoneAlt } from 'react-icons/fa'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#4E6FB7' }} className={`${styles.footerDesign}`}>
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
  )
}

export default Footer
