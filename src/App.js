import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes, Redirect } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Romcham = React.lazy(() => import('./components/RomChamFullUi'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/registration'))
const Commitee = React.lazy(() => import('./views/pages/create-committees/CreateCommittees'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const NewCommitee = React.lazy(() => import('./views/pages/new-committees/NewCommittees'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="Romcham" element={<Romcham />} />
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/commitee" name="Commitee Page" element={<Commitee />} />
            <Route
              exact
              path="/newcommittees/:id"
              name="New Commitee Page"
              element={<NewCommitee />}
            />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Dashboard" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
