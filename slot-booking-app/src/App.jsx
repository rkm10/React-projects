import React from 'react';
import ReactDOM from 'react-dom';
import DateTimePicker from './components/DateTimePicker';
import DatePicker from './components/DatePicker';
import InvociceCard from './components/InvociceCard';

function App() {

  return (
    <>
      <div>
        <h1>Select Date & Time</h1>
        {/* <DateTimePicker /> */}
        <DatePicker />
        {/* <InvociceCard /> */}
      </div>
    </>
  )
}

export default App
