import ExpenseHistory from './Components/ExpenseHistory'
import Form from './Components/Form'

function App() {

  return (
    <>
      <div className="flex flex-col items-center gap-5 pt-12" style={{ height: "80vh" }}>
        <h1 className='card-title '>Expense Tracker</h1>
        <h2 className='text-white font-bold text-3xl'>Account balance : 20020</h2>
        <div className='container flex  justify-center gap-3'>
          <Form />
          <ExpenseHistory />
        </div>
      </div>
    </>
  )
}

export default App
