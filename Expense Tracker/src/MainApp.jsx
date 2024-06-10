import { useState, useEffect } from 'react'
import ExpenseHistory from './Components/ExpenseHistory'
import Form from './Components/Form'
import { getsData } from './Components/api'

function MainApp() {
      const [data, setData] = useState([]);

      useEffect(() => {
            getData().then((data) => {
                  setData(data)
            })
      }, [])

      let getData = async () => {
            let res = await getsData();
            setData(res.data)
      }



      return (
            <>
                  <div className="flex flex-col items-center gap-5 pt-12" style={{ height: "80vh" }}>
                        <h1 className='card-title '>Expense Tracker</h1>
                        <h2 className='text-white font-bold text-3xl'>Account balance : 20020</h2>
                        <div className='container flex  justify-center gap-3'>
                              <Form />
                              <ExpenseHistory data={data} />
                        </div>
                  </div>
            </>
      )
}

export default MainApp
