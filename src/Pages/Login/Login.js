import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import loginImg from '../../images/login.png';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginWithEmail, isLoading, authError, googleSignIn } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        loginWithEmail(loginData.email, loginData.password, location, history);
    }

    const handleGoogleSignIn = () => {
        googleSignIn(location, history);
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={6} sm={6} xs={12} sx={{ mt: 15 }}>
                        <Typography variant='h5'>
                            Login
                        </Typography>
                        {!isLoading ? <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', mb: 3 }}
                                id="standard-basic"
                                label="User Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', mb: 3 }}
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                id="standard-basic"
                                label="Password"
                                variant="standard" />
                            <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Login</Button>
                            <NavLink to='/register' style={{ display: 'block' }}>
                                <Button variant="text">Regsiter Here</Button>
                            </NavLink>
                        </form> : <CircularProgress sx={{ mt: 5 }} />}
                        {user?.email && <Alert severity="success">You Have Logged In Successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}

                        <Button onClick={handleGoogleSignIn} variant="contained" sx={{ mt: 2 }}>Google Sign-in</Button>

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

export default Login;