import * as React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} sm={4}>
                    <Calender
                        date={date}
                        setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={8} sm={8}>
                    <Appointments
                        date={date}></Appointments>
                </Grid>

            </Grid>
        </Box>
    );
};

export default DashboardHome;