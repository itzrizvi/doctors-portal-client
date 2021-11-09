import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Container, Typography } from '@mui/material';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
]


const AvailableAppointments = ({ date }) => {
    const [appointmentSuccess, setAppointmentSuccess] = useState(false);
    return (
        <Container>
            <Typography variant='h4' sx={{ color: 'info.main', mb: 5 }}>
                Available Appointments on {date.toDateString()}
            </Typography>
            {appointmentSuccess && <Alert severity="success">Your Appointment has been Successfully Created!</Alert>}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        bookings.map(booking => <Booking
                            date={date}
                            key={booking.id}
                            booking={booking}
                            setAppointmentSuccess={setAppointmentSuccess}></Booking>)
                    }
                </Grid>
            </Box>

        </Container>
    );
};

export default AvailableAppointments;