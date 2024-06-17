import { Provider } from "react-redux"
import MainFile from "./Components/MainFile"
import store from "./Components/Store"


function App() {

  return (
    <Provider store={store}>
      <MainFile />
    </Provider>
  )
}

export default App
