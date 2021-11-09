import React from 'react';
import './Banner.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';


const bannerBG = {
    background: `url(${bg})`,
}
const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }} py={10} style={bannerBG} mb={7}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} sx={{ textAlign: 'left' }} mt={3}>
                        <Typography variant='h3' style={{ color: '#203047' }} mb={2}>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant='p' mb={3} style={{ display: 'block' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat incidunt molestias sint voluptatibus eligendi eum consequuntur laboriosam adipisci praesentium?
                        </Typography>
                        <Button variant='contained' sx={{ display: 'block' }}>Get Appointment</Button>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <img
                            style={{ width: '80%', margin: '0 auto', display: 'block' }} src={chair} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </Box >
    );
};

export default Banner;