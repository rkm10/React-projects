import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';


const DateTimePicker = () => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(null);
    const [showSlots, setShowSlots] = useState(false); // State to toggle slots visibility

    const availableSlots = {
        '2024-07-26': ['8:00 AM', '9:00 AM', '10:00 AM', '12:00 PM'],
        '2024-07-27': ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'],
    };

    const handleDateChange = date => {
        setDate(date);
        setShowSlots(true); // Show slots when date changes
    };

    const handleTimeClick = time => setTime(time);

    const formattedDate = date.toISOString().split('T')[0];

    return (
        <div className="date-time-picker">
            <Calendar
                onChange={handleDateChange}
                value={date}
                minDate={new Date()}
                calendarType='gregory'
            />
            <div className={`time-slots ${showSlots ? 'show' : ''}`}>
                {availableSlots[formattedDate] ? (
                    availableSlots[formattedDate].map(slot => (
                        <button
                            key={slot}
                            className={`time-slot ${time === slot ? 'selected' : ''}`}
                            onClick={() => handleTimeClick(slot)}
                        >
                            {slot}
                        </button>
                    ))
                ) : (
                    <p>No slots available</p>
                )}
            </div>
        </div>
    );
};

export default DateTimePicker;