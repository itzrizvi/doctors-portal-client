import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setAppointmentSuccess }) => {
    const { name, time, space } = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4} >
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography variant='h5' sx={{ color: 'info.main', fontWeight: '600' }}>
                        {name}
                    </Typography>
                    <Typography variant='h6'>
                        {time}
                    </Typography>
                    <Typography variant='caption' sx={{ display: 'block' }}>
                        {space} SPACE AVAILABLE
                    </Typography>
                    <Button onClick={handleOpen} variant="contained">BOOK APPOINTMENT</Button>

                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                open={open}
                handleClose={handleClose}
                setAppointmentSuccess={setAppointmentSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;