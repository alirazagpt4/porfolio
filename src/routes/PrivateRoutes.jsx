import { useRoutes, Navigate, Link } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import { Box, AppBar, Toolbar, Button , Typography } from '@mui/material';

const PrivateRoute = ({ children }) => {
  // const token = localStorage.getItem('token'); 
  // return token ? children : <Navigate to="/" />;
  return  children 
};

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant='h5' sx={{mr:22}} >Ali Raza</Typography>
        <Button color="inherit">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            Projects
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/contact-us" style={{ textDecoration: 'none', color: 'inherit' }}>
           Contact Me
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const PrivateRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: (
        <PrivateRoute>
          <Box>
            <Navigation />
            <Home />
          </Box>
        </PrivateRoute>
      ),
    },
    {
      path: '/about',
      element: (
        <PrivateRoute>
          <Box>
            <Navigation />
            <About />
          </Box>
        </PrivateRoute>
      ),
    },
    {
      path: '/contact-us',
      element: (
        <PrivateRoute>
          <Box>
            <Navigation />
            <Contact />
          </Box>
        </PrivateRoute>
      ),
    },
  ]);
};

export default PrivateRoutes;
