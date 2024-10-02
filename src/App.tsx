// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import * as React from 'react'
// import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About'
import ErrorPage from './ErrorPage'
import IndexPage from './IndexPage'
import Layout from './Layout'
import Project from './Project'

const router = createBrowserRouter([
  {
    path: '/*',
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [{
      index: true,
      Component: IndexPage,
    }, {
      path: 'about',
      element: <About />,
    }, {
      path: ':category/*',
      children: [{
        index: true,
        Component: IndexPage
      }, {
        path: ':name',
        Component: Project,
      }],
    }],
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
