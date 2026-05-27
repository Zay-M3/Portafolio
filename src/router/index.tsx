import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '@layout/AppLayout'
import { HomePage, ProjectsPage, AboutPage, ContactPage, GalaxyPage, NotFoundPage } from '@pages/index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'galaxias', element: <GalaxyPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
