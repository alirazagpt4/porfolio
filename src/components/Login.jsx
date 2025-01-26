import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../feature/authReducer'; 
import { TextField, Button, Box, Typography } from '@mui/material';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token === 'true') {
    
      navigate('/home');
    }
  }, [token, navigate]);

  const storedEmail = localStorage.getItem('email');
  const data = useSelector((state) => state.auth.email);
  console.log(data,"email in data")

  const storedPassword = localStorage.getItem('password');

  const handleLogin = () => {
  
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

  
    if (emailInput === storedEmail && passwordInput === storedPassword) {
      
    
      dispatch(login({ email: storedEmail, password: storedPassword, token: 'true' }));
     
      
  
       
      localStorage.setItem('token', 'true');

   
      navigate('/home');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

 

  const navigateToSignUp = () => {
    navigate('/signup'); 
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: 2, 
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        id="email"  
        label="Email"
        name="email"
        variant="outlined"
      
      />
      <TextField
        id="password"  
        label="Password"
        name="password"
        type="password"
        variant="outlined"
    
      />
      <Button
        variant="contained"
        color="primary"
       
        onClick={handleLogin} 
      >
        Login
      </Button>
      <Button
        variant="text"
        color="secondary"
        onClick={navigateToSignUp}
      >
        Dont have an account? Sign Up
      </Button>
    </Box>
  );
};

export default Login;
