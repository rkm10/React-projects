
function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        }
      ]
    }
  ])
  return (
    <>

    </>
  )
}

export default App
