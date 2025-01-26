import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../feature/authReducer';
import { TextField, Button, Box , Typography } from '@mui/material';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { email, password } = useSelector((state) => state.auth);

  const handleSignUp = () => {
    if (email && password) {

      dispatch(
        signup({ email, password, token: null }) 
      );

      localStorage.setItem('email', email);
      localStorage.setItem('password', password); 
      localStorage.setItem('token', 'null'); 

   
      navigate('/'); 
    } else {
      alert('Please fill in all fields');
    }
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
        Sign Up
      </Typography>
      <TextField
        label="Email"
        name="email"
        variant="outlined"
      
        value={email} 
        onChange={(e) => dispatch(signup({ email: e.target.value, password, token: null }))} 
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        variant="outlined"
      
        value={password} 
        onChange={(e) => dispatch(signup({ email, password: e.target.value, token: null }))} 
      />
      <Button
        variant="contained"
        color="primary"
     
        onClick={handleSignUp}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;
