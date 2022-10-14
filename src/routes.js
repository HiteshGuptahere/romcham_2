import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const Feeds = React.lazy(() => import('./views/pages/Feeds/Feeds'))
const Polls = React.lazy(() => import('./views/pages/PollList/PollList'))
const Events = React.lazy(() => import('./views/pages/Event-List/EventList'))
const Analytics = React.lazy(() => import('./views/pages/page404/Page404'))
const Settings = React.lazy(() => import('./views/pages/page404/Page404'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/page', name: 'Dashboard', element: Dashboard },
  { path: '/page/feeds', name: 'Feeds', element: Feeds },
  { path: '/page/events', name: 'Events', element: Events },
  { path: '/page/polls', name: 'Polls', element: Polls },
  { path: '/page/analytics', name: 'Analytics', element: Analytics },
  { path: '/page/settings', name: 'Settings', element: Settings },
]

export default routes
