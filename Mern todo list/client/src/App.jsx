import { createBrowserRouter, RouterProvider } from "react-router-dom"
import User from "./components/getuser/user"

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: "Add User"
    },
    {
      path: "/edit/:id",
      element: "Edit User"
    }
  ])

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <RouterProvider router={route} >
      </RouterProvider>
    </>
  )
}

export default App
