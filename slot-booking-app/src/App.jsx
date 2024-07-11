import React from 'react';
import ReactDOM from 'react-dom';
import DateTimePicker from './components/DateTimePicker';
import DatePicker from './components/DatePicker';

function App() {

  return (
    <>
      <div>
        <h1>Select Date & Time</h1>
        {/* <DateTimePicker /> */}
        <DatePicker />
      </div>
    </>
  )
}

export default App
