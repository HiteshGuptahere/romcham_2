import React from 'react'
import { Row, Col } from 'react-bootstrap'
import NoticeBoard from 'src/views/pages/NoticeBoard/NoticeBoard'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <Row>
            <Col className="col-9">
              <AppContent />
            </Col>
            <Col className="col-3">
              <NoticeBoard />
            </Col>
          </Row>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
