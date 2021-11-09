import React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import './Services.css';
import flouride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';

const servicesData = [
    {
        name: 'Flouride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est aspernatur perspiciatis iste omnis deleniti suscipit consequuntur iusto voluptatibus impedit. Similique est aspernatur perspiciatis iste omnis deleniti suscipit consequuntur iusto voluptatibus impedit.',
        img: flouride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est aspernatur perspiciatis iste omnis deleniti suscipit consequuntur iusto voluptatibus impedit. Similique est aspernatur perspiciatis iste omnis deleniti suscipit consequuntur iusto voluptatibus impedit.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est aspernatur perspiciatis iste omnis deleniti suscipit consequuntur iusto voluptatibus impedit. Similique est aspernatur perspiciatis iste omnis deleniti suscipit consequuntur iusto voluptatibus impedit.',
        img: whitening
    }
];

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 2 }}>
            <Container>
                <Typography variant="h6" component="div" sx={{ color: 'info.main', mb: 2 }}>
                    Our Services
                </Typography>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        servicesData.map(service => <Service
                            key={service.name}
                            service={service}></Service>)
                    }
                </Grid>
            </Container>
        </Box >
    );
};

export default Services;