import { Provider } from "react-redux"
import MainApp from "./Components/MainApp"
import store from "./Components/Store"

function App() {

  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App
