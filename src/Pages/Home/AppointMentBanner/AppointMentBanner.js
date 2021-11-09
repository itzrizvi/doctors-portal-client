import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import appointmentBG from '../../../images/appointment-bg.png';
import { Button, Container, Typography } from '@mui/material';


const appointmentBannerBg = {
    backgroundImage: `url(${appointmentBG})`,
    backgroundColor: 'rgba(46, 46, 46, 0.8)',
    backgroundBlendMode: 'darken'
}
const AppointMentBanner = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 20 }} style={appointmentBannerBg}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <img
                            style={{ width: '400px', marginTop: '-110px' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant='h6' sx={{ textAlign: 'left', color: 'info.main', mb: 2, pt: 5 }}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' sx={{ textAlign: 'left', color: '#FFFFFF', mb: 1 }}>
                            Make and Appointment Today
                        </Typography>
                        <Typography variant='p' sx={{ textAlign: 'left', display: 'block', color: '#FFFFFF' }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas nostrum ducimus quaerat animi magnam eaque molestiae, numquam architecto fugiat id.
                        </Typography>
                        <Button variant='contained' style={{ float: 'left', overFlow: 'hidden', marginTop: '20px' }}>Learn More</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointMentBanner;