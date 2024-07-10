import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';

const DateTimePicker = () => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);

    const availableSlots = {
        '2024-07-26': ['8:00 AM', '9:00 AM', '10:00 AM', '12:00 PM'],
        '2024-07-27': ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'],
    };

    const handleDateChange = date => setDate(date);

    const handleTimeClick = slot => {
        setSelectedSlot(slot === selectedSlot ? null : slot);
    };

    const formattedDate = date.toISOString().split('T')[0];

    return (
        <div className="date-time-picker">
            <Calendar
                onChange={handleDateChange}
                value={date}
                minDate={new Date()}
            />
            <div className="time-slots">
                {availableSlots[formattedDate] ? (
                    availableSlots[formattedDate].map(slot => (
                        <button
                            key={slot}
                            className={`time-slot ${time === slot ? 'selected' : ''} ${selectedSlot === slot ? 'slot-slide-down' : ''}`}
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
