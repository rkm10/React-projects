import React, { useState, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const MyDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('10:00');

    const myLabels = useMemo(() => {
        return [
            {
                start: '2024-07-09',
                textColor: '#e1528f',
                title: '4 SPOTS',
            },
        ];
    }, []);

    const myInvalid = useMemo(() => {
        return [
            {
                start: '2024-07-09T08:00',
                end: '2024-07-09T13:00',
            },
            {
                start: '2024-07-09T15:00',
                end: '2024-07-09T17:00',
            },
            {
                start: '2024-07-09T19:00',
                end: '2024-07-09T20:00',
            },
        ];
    }, []);

    const isInvalidTime = (time) => {
        const selected = new Date(`2024-07-09T${time}:00`);
        return myInvalid.some((invalid) => {
            const start = new Date(invalid.start);
            const end = new Date(invalid.end);
            return selected >= start && selected < end;
        });
    };

    return (
        <div>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date('2024-07-09')}
                maxDate={new Date('2025-01-09')}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                minTime={new Date('2024-07-09T08:00')}
                maxTime={new Date('2024-07-09T19:59')}
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            <TimePicker
                onChange={setSelectedTime}
                value={selectedTime}
                disableClock
                format="HH:mm"
            />
            {isInvalidTime(selectedTime) && <p>This time is unavailable.</p>}
        </div>
    );
};

export default MyDatePicker;



