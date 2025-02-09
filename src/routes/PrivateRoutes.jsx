import { useRoutes, Link } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import { Box, AppBar, Toolbar, Button, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import  { useState } from 'react';

const PrivateRoute = ({ children }) => {
  // Uncomment the following line if you want to use token-based authentication
  // const token = localStorage.getItem('token');
  // return token ? children : <Navigate to="/" />;
  return children;
};

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/about' },
    { label: 'Contact Me', to: '/contact-us' }
  ];

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5">Ali Raza</Typography>
        
        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {navLinks.map((item, index) => (
            <Button key={index} color="inherit">
              <Link to={item.to} style={{ textDecoration: 'none', color: 'inherit' }}>
                {item.label}
              </Link>
            </Button>
          ))}
        </Box>

        {/* Mobile Menu */}
        <IconButton 
          edge="end" 
          color="inherit" 
          sx={{ display: { xs: 'block', md: 'none' } }} 
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
              {navLinks.map((item, index) => (
                <ListItem button key={index}>
                  <ListItemText>
                    <Link to={item.to} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {item.label}
                    </Link>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
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
      )
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
      )
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
      )
    }
  ]);
};

export default PrivateRoutes;
