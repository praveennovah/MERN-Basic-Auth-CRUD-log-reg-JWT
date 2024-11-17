import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Navigate, json, useNavigate } from 'react-router-dom';
import axios from "axios";
function Register () {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      //API  call to post the data
      const response = await axios.post("http://localhost:3030/v1/register",
      {firstName,
        lastName,
        email,
        password});
        console.log(response.data);
        setEmail("");
        setFirstName("");
        setLastName("");
        setPassword("");
      navigate("/login");

    }
    catch(err){
      console.error(err.response?.data);
    }
    
  };

  const GotoLogin =()=>{
    navigate("/login")
  }
  return (
    <Container component="main" maxWidth="xl">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="auto"
        minHeight="100vh"
      >
        <Typography component="h1" variant="h5" color='primary'>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            autoFocus
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </form>
        <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={GotoLogin}
          >
             Login
          </Button>
      </Box>
      
    </Container>
  );
}

export default Register;
