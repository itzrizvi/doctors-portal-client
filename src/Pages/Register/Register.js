import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import loginImg from '../../images/login.png';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const { registerNewUser, isLoading, user, authError } = useAuth();
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {

        e.preventDefault();
        if (loginData.password !== loginData.passwordTwo) {
            alert('Your Password Didn\'t Matched');
            return;
        }

        registerNewUser(loginData.email, loginData.password, loginData.name, history);

    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={6} sm={6} xs={12} sx={{ mt: 15 }}>
                        <Typography variant='h5'>
                            Register
                        </Typography>
                        {!isLoading ? <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', mb: 3 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', mb: 3 }}
                                id="standard-basic"
                                label="User Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', mb: 3 }}
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                id="standard-basic"
                                label="Password"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', mb: 3 }}
                                type="password"
                                name="passwordTwo"
                                onBlur={handleOnBlur}
                                id="standard-basic"
                                label="Re-Type Password"
                                variant="standard" />
                            <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Register</Button>
                            <NavLink to='/login' style={{ display: 'block' }}>
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                        </form> : <CircularProgress sx={{ mt: 5 }} />}
                        {user?.email && <Alert severity="success">You Have Registered Successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                        <img
                            style={{ width: '96%' }}
                            src={loginImg} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Register;