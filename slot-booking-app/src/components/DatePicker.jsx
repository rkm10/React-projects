// src/DatePicker.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import styled from 'styled-components';
import styled from '@emotion/styled/macro';
import './CustomCalendar.css'; // Custom styles for Calendar

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const TimeSlotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const TimeSlotsHeader = styled.h3`
  margin: 10px 0;
  font-size: 16px;
`;

const TimeSlotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const TimeSlot = styled.button`
  padding: 10px;
  background-color: ${props => props.selected ? '#4caf50' : '#e6ffe6'};
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;

  &:hover {
    background-color: ${props => props.selected ? '#45a049' : '#d4ffd4'};
  }
`;

const CalendarWrapper = styled.div`
  .react-calendar {
    border: none;
    width: 100%;
    max-width: 350px;
    background: white;
    font-family: 'Arial', sans-serif;
    line-height: 1.125em;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
  .react-calendar__navigation button {
    color: #4caf50;
    min-width: 44px;
    background: none;
    font-size: 16px;
    margin-top: 8px;
  }
  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #d9534f;
  }
  .react-calendar__tile--active {
    background: #4caf50;
    color: white;
  }
  .react-calendar__tile--active:hover {
    background: #45a049;
  }
  .react-calendar__tile--now {
    background: #ffeb3b;
  }
  .react-calendar__tile--disabled {
    cursor: not-allowed;
    background-color: #f9f9f9;
  }
`;

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [availableTimeSlots, setAvailableTimeSlots] = useState([
        '08:00 am', '08:15 am', '08:30 am', '08:45 am', '09:00 am'
    ]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedTime(null); // Reset selected time when date changes
    };

    const handleTimeSlotClick = (time) => {
        setSelectedTime(time);
    };

    const tileDisabled = ({ date }) => {
        return date < new Date().setHours(0, 0, 0, 0); // Disable dates before today
    };

    return (
        <Container>
            <h2>Select a Date & Time</h2>
            <CalendarWrapper>
                <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    tileDisabled={tileDisabled}
                />
            </CalendarWrapper>
            {selectedDate && (
                <TimeSlotsContainer>
                    <TimeSlotsHeader>Pick a slot for {selectedDate.toDateString()}</TimeSlotsHeader>
                    <TimeSlotGrid>
                        {availableTimeSlots.map(time => (
                            <TimeSlot
                                key={time}
                                selected={time === selectedTime}
                                onClick={() => handleTimeSlotClick(time)}
                            >
                                {time}
                            </TimeSlot>
                        ))}
                    </TimeSlotGrid>
                </TimeSlotsContainer>
            )}
        </Container>
    );
};

export default DatePicker;
