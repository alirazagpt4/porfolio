import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiExpress, SiNodedotjs, SiJavascript, SiRedux } from "react-icons/si";
import { Grid, Box, Typography } from '@mui/material';

const Technologies = () => {
  return (
    <Box sx={{ borderBottom: '1px solid #333', paddingBottom: 6 }}>
      <Typography variant="h4" align="center" sx={{ my: 5 }}>
        Technologies
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* React */}
        <Grid item xs={4} sm={2}>
          <Box
            sx={{
              border: '4px solid #333',
              borderRadius: '16px',
              padding: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <RiReactjsLine style={{ fontSize: '3rem', color: '#00bcd4' }} />
          </Box>
        </Grid>
        
        {/* MongoDB */}
        <Grid item xs={4} sm={2}>
          <Box
            sx={{
              border: '4px solid #333',
              borderRadius: '16px',
              padding: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SiMongodb style={{ fontSize: '3rem', color: '#4caf50' }} />
          </Box>
        </Grid>

        {/* Express */}
        <Grid item xs={4} sm={2}>
          <Box
            sx={{
              border: '4px solid #333',
              borderRadius: '16px',
              padding: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SiExpress style={{ fontSize: '3rem', color: '#9e9e9e' }} />
          </Box>
        </Grid>

        {/* Node.js */}
        <Grid item xs={4} sm={2}>
          <Box
            sx={{
              border: '4px solid #333',
              borderRadius: '16px',
              padding: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SiNodedotjs style={{ fontSize: '3rem', color: '#4caf50' }} />
          </Box>
        </Grid>

        {/* JavaScript */}
        <Grid item xs={4} sm={2}>
          <Box
            sx={{
              border: '4px solid #333',
              borderRadius: '16px',
              padding: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SiJavascript style={{ fontSize: '3rem', color: '#ffeb3b' }} />
          </Box>
        </Grid>

        {/* Redux */}
        <Grid item xs={4} sm={2}>
          <Box
            sx={{
              border: '4px solid #333',
              borderRadius: '16px',
              padding: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SiRedux style={{ fontSize: '3rem', color: '#9c27b0' }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Technologies;
