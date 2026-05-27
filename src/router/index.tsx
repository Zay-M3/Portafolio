import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '@layout/AppLayout'
import HomePage from '@pages/HomePage'
import GalaxyPage from '@pages/GalaxyPage'
import NotFoundPage from '@pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'galaxias', element: <GalaxyPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
