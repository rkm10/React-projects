import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import AppointmentPicker from 'appointment-picker';
import 'react-datepicker/dist/react-datepicker.css';

class AppoPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null,
            timeSlots: [],
        };
        this.pickerRef = React.createRef();
        this.onTimeSelect = this.onTimeSelect.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    componentDidMount() {
        this.initializePicker([]);
    }

    componentWillUnmount() {
        this.destroyPicker();
    }

    initializePicker(times) {
        if (this.pickerRef.current) {
            this.destroyPicker();
            this.picker = new AppointmentPicker(this.pickerRef.current, { timeslots: times });
            this.pickerRef.current.addEventListener('change.appo.picker', this.onTimeSelect);
        }
    }

    destroyPicker() {
        if (this.picker) {
            this.pickerRef.current.removeEventListener('change.appo.picker', this.onTimeSelect);
            this.picker.destroy();
        }
    }

    onTimeSelect(event) {
        console.log(event.time);
    }

    handleDateChange(date) {
        this.setState({ selectedDate: date }, () => {
            // Update time slots based on the selected date
            this.updateTimeSlots(date);
        });
    }

    updateTimeSlots(date) {
        // For demonstration purposes, we're using static time slots.
        // In a real-world scenario, you would fetch available time slots from a server.
        const timeSlots = [
            '08:00', '09:00', '10:00', '11:00',
            '13:00', '14:00', '15:00', '16:00',
        ];

        this.setState({ timeSlots }, () => {
            // Reinitialize the picker with new time slots
            this.initializePicker(timeSlots);
        });
    }

    render() {
        return (
            <div>
                <DatePicker
                    selected={this.state.selectedDate}
                    onChange={this.handleDateChange}
                    inline
                />
                <input type="text" ref={this.pickerRef} />
            </div>
        );
    }
}

export default AppoPicker;
