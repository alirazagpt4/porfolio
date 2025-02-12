import { Box, CircularProgress, useMediaQuery } from '@mui/material';

const Loader = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if screen width is less than 600px

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark transparent background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1300
      }}
    >
      {/* CircularProgress size changes based on screen size */}
      <CircularProgress size={isMobile ? 40 : 60} sx={{ color: '#1976d2' }} /> {/* Primary Blue */}
    </Box>
  );
};

export default Loader;
