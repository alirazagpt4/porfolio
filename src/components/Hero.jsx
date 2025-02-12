import { Grid, Typography, Button, Box } from '@mui/material';
import imageI from '../images/profile-pic.png';
import { HERO_CONTENT } from '../data/index';

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '16px', md: '0 16px' },
        mt: 8,
        color: '#fff',
        borderBottom: '1px solid #1a1a1a',
        pb: { xs: 2, md: 4 },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h3" gutterBottom>
            Mern Stack Developer
          </Typography>
          <Typography variant="body1" gutterBottom>
            {HERO_CONTENT}
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Get in Touch
          </Button>
        </Grid>

        {/* Right Section (Image) */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src={imageI}
            alt="Hero Image"
            sx={{
              width: { xs: '100%', sm: '80%', md: '70%' },  // Adjust width for better responsiveness
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // Optional shadow for a polished look
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
