import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';


const DateTimeSlotPicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('10:00');

    return (
        <div>
            <h3>Select a Date and Time Slot</h3>
            <div>
                <label>Date: </label>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MMMM d, yyyy"
                />
            </div>
            <div>
                <label>Time: </label>
                <TimePicker
                    onChange={setSelectedTime}
                    value={selectedTime}
                />
            </div>
            <div>
                <h4>Selected Slot</h4>
                <p>Date: {selectedDate.toLocaleDateString()}</p>
                <p>Time: {selectedTime}</p>
            </div>
        </div>
    );
};

export default DateTimeSlotPicker;
