import { createHashRouter, RouterProvider } from 'react-router-dom'
import About from './About'
import ErrorPage from './ErrorPage'
import IndexPage from './IndexPage'
import Layout from './Layout'
import Project from './Project'

const router = createHashRouter([
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
        // @ts-ignore
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
