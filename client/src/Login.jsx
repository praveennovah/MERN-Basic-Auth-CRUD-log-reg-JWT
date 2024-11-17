import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
      try{
        //API call to post the User Credentials 
        const response = await axios.post("http://localhost:3030/v1/login",{email,password});
        //JWT generated token sent as a response
        const token = response.data.token;
        //token stored in a localStorage 
        localStorage.setItem('token',token)
        console.log(response);
        setEmail("");
        setPassword("");
        navigate("/profile")
      }
      catch(err){
        console.error(err.responce?.data)
      }
     
  };

  return (
    <Container component="main" maxWidth="lg" >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="auto"
        minHeight="100vh"
      >
        <Typography component="h1" variant="h5" color='primary'>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            autoComplete="current-password"
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
            Sign In
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
