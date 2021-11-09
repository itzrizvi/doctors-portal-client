import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import chair from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';

const AppointmentHeader = ({ date, setDate }) => {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={12} sm={6} md={6} >
                        <Calender date={date} setDate={setDate}></Calender>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} >
                        <img
                            style={{
                                width: '90%',
                                margin: '0 auto',
                                display: 'block'
                            }}
                            src={chair} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentHeader;