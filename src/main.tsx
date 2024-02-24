import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.scss'
import {AllFunction} from './all_function'
import Cvdownload from './assets/components/cv'
import Notfound from './assets/components/notFoundpage'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path :'/',
    element: <AllFunction/>,
    errorElement : <Notfound/> 
  },
  {
    path :'/cv',
    element: <Cvdownload/>
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,



)
