import React, { useState } from 'react'

import './App.css'

function App() {

      let [counter, setCounter] = useState(0)
      let stock = 10


      return (
            <>
                  <div className='wrapper'>
                        <h1>Counter App in React</h1>
                        <h3>Stock Left :10</h3>
                        <div className='sub-wrapper'>
                              <button className='less' disabled={counter === 0} onClick={
                                    () => {
                                          if (counter > 0) {
                                                setCounter(counter - 1)
                                          }
                                    }
                              }>-</button>
                              <p>{counter}</p>
                              <button className='plus' disabled={counter === stock} onClick={
                                    () => {
                                          if (counter < stock) {
                                                setCounter(counter + 1)
                                          }
                                    }
                              }>+</button>
                        </div>
                  </div>
            </>
      )
}

export default App
