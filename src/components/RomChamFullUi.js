import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Banner from './Banner'
import Ui from './ui/UI'

function RomCham() {
  return (
    <>
      <NavBar />
      <Banner />
      <Home />
      <div className="mt-5">
        <Ui />
      </div>
    </>
  )
}

export default React.memo(RomCham)
