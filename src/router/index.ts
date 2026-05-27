import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '@layout/AppLayout'

// Pages will be renamed in block 7
// For now importing with existing names
import { HomePage } from '@pages/Home'
import { ProjectsPage } from '@pages/Proyects'
import { AboutPage } from '@pages/AboutMe'
import { ContactPage } from '@pages/ContacMe'
import { GalaxyPage } from '@pages/Galaxy'
import { NotFoundPage } from '@pages/NotFound'

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
