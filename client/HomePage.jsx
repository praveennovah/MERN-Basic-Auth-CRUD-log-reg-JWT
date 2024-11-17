import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Box, Container, Typography } from '@mui/material';

const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        //getting the token from localStorage
        const token = localStorage.getItem('token');
        //API call to verify and decode the token
        const response = await axios.get("http://localhost:3030/v1", {
          headers: { 'Authorization': token }
        });
        /*response is a Decoded payload data from the token set to the setUser().
        to bind the user details in the HomePage
        */
        setUser(response.data);
      } catch (err) {
        console.error(err.response?.data);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <Container component="main" maxWidth="lg">
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginTop={8}>
        <Typography component="h1" variant="h4" color='primary'> Welcome, {user.firstName}! </Typography>
        <Typography variant="h6" color="primary" gutterBottom> Email: {user.email} </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
