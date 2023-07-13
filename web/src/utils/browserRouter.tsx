import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import CarDetails from '../pages/CarDetails'
import Login from '../pages/Login'
import AdminPage from '../pages/AdminPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/car/:id',
    element: <CarDetails />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/car/register',
    element: <AdminPage />
  },
  {
    path: '*',
    element: <NotFound />,
    errorElement: <NotFound />
  }
])
