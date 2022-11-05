import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const Feeds = React.lazy(() => import('./views/pages/Feeds/Feeds'))
const PollList = React.lazy(() => import('./views/pages/PollList/PollList'))
const CreatePoll = React.lazy(() => import('./views/pages/createpoll/createpoll'))
const Events = React.lazy(() => import('./views/pages/Event-List/EventList'))
const CreateEvent = React.lazy(() => import('./views/pages/Create-Event/CreateEvent'))
const PastEvents = React.lazy(() => import('./views/pages/Past-Events/PastEvents'))
// const UpcomingEvents = React.lazy(() => import('./views/pages/Upcoming-Events/EventDetails'))
const UpcomingEvents = React.lazy(() => import('./views/pages/Upcoming-Events/UpcomingDetails'))
const Analytics = React.lazy(() => import('./views/pages/page404/Page404'))
const page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Settings = React.lazy(() => import('./views/pages/settings/Settings'))
const General = React.lazy(() => import('./views/pages/settings/general'))
const Managers = React.lazy(() => import('./views/pages/settings/Manager'))
const Permissions = React.lazy(() => import('./views/pages/settings/Permissions'))
const Registration = React.lazy(() => import('./views/pages/settings/Registration'))
const Members = React.lazy(() => import('./views/pages/settings/Members'))
const Groups = React.lazy(() => import('./views/pages/settings/Groups'))
const Editevent = React.lazy(() => import('./views/pages/Edit-Event/EditEvent'))

const routes = [
  { path: '/page', exact: true, name: 'Dashboard' },
  { path: '/page', name: 'Dashboard', element: Dashboard },
  { path: '/page/feeds', name: 'Feeds', element: Feeds },
  { path: '/page/events', name: 'Events', element: Events },
  { path: '/page/create-event', name: 'CreateEvents', element: CreateEvent },
  { path: '/page/past-events', name: 'PastEvents', element: PastEvents },
  { path: '/page/upcomingevents', name: 'UpcomingEvents', element: UpcomingEvents },
  { path: '/page/poll-list', name: 'PollList', element: PollList },
  { path: '/page/create-poll', name: 'CreatePoll', element: CreatePoll },
  { path: '/page/analytics', name: 'Analytics', element: Analytics },
  { path: '/page/settings', name: 'Settings', element: Settings },
  { path: '/page/settings/general', name: 'General', element: General },
  { path: '/page/settings/managers', name: 'Managers', element: Managers },
  { path: '/page/settings/permissions', name: 'Permissions', element: Permissions },
  { path: '/page/settings/registration', name: 'Registration', element: Registration },
  { path: '/page/settings/members', name: 'Members', element: Members },
  { path: '/page/settings/groups', name: 'Groups', element: Groups },
  { path: '/page/editevent/:id', name: 'Editevent', element: Editevent },
  // { path: '**', pathMatch: 'full', component: page404 },
]

export default routes
