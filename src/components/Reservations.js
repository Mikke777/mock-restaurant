import React, { useState, useEffect } from 'react';
import './Reservations.css';
import { fetchAPI } from './api';
import Swal from 'sweetalert2';

const Reservations = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        occasion: 'Birthday',
        date: '',
        time: '',
    });

    const [availableTimes, setAvailableTimes] = useState([]);
    const [reservations, setReservations] = useState([]);

    const fetchAvailableTimes = (selectedDate) => {
        const date = new Date(selectedDate);
        const times = fetchAPI(date);
        setAvailableTimes(times);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'date') {
            fetchAvailableTimes(value);
        }
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      const isBooked = reservations.some(
          (reservation) => reservation.date === formData.date && reservation.time === formData.time
      );

      if (isBooked) {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'This time slot is already booked. Please select another time.',
          });
          return;
      }

      const newReservations = [...reservations, formData];
      setReservations(newReservations);
      localStorage.setItem('reservations', JSON.stringify(newReservations));

      Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your reservation was submitted!',
      });

      resetForm();
    };

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            occasion: 'Birthday',
            date: '',
            time: '',
        });
        setAvailableTimes([]);
    };

    useEffect(() => {
        const storedReservations = localStorage.getItem('reservations');
        if (storedReservations) {
            setReservations(JSON.parse(storedReservations));
        }
    }, []);

    return (
        <section className="reservations-section" id="reservations">
            <h1>Reservations</h1>
            <p>If you'd like to make a reservation, please fill out the form below. We'll get back to you as soon as possible.</p>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='name-form'>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
                    </div>
                    <div>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
                    </div>
                    <div>
                      <input type="number" name="numberOfPersons" value={formData.numberOfPersons} onChange={handleChange} min="1" max="5" placeholder="Number of Persons" required />
                    </div>
                    <div>
                        <select name="occasion" value={formData.occasion} onChange={handleChange} required>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                        <select name="time" value={formData.time} onChange={handleChange} required>
                            <option value="">Select Time</option>
                            {availableTimes.map((time) => (
                                <option key={time} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>
                    <button className='submit-form' type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Reservations;
