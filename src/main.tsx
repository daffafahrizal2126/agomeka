import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import App from './App'
import Home from './pages/Home'
import DaftarIsi from './pages/DaftarIsi'
import MateriKalimatEfektif from './pages/MateriKalimatEfektif'
import Soal from './pages/Soal'
import Biodata from './pages/Biodata'
import MateriKalimatSPOK from './pages/MateriKalimatSPOK'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'daftar-isi', element: <DaftarIsi /> },
      { path: 'materi-kalimat-efektif', element: <MateriKalimatEfektif /> },
      { path: 'materi-kalimat-spok', element: <MateriKalimatSPOK /> },
      { path: 'soal', element: <Soal /> },
      { path: 'biodata', element: <Biodata /> },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
