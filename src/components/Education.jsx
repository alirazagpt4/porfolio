import { EDUCATION } from "../data/index";
import { Grid, Typography, Box, Paper } from "@mui/material";

const Education = () => {
  return (
    <Box sx={{ borderBottom: '1px solid #1a1a1a', pb: 6 }}>
      <Typography variant="h4" align="center" sx={{ my: 5 }}>
        Education
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {EDUCATION.map((edu, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              sx={{
                padding: 3,
                borderRadius: 3,
                boxShadow: 2,
                backgroundColor: '#212121',
                color: '#fff',
                borderLeft: '4px solid #bb86fc',
                mb: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',  // Ensures equal height by using flex
                minHeight: '200px',  // Set a minimum height for each Paper component
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {edu.degree}
              </Typography>
              <Typography variant="body2" sx={{ color: '#9e9e9e' }}>
                {edu.institution}, {edu.city}
              </Typography>
              <Typography variant="body2" sx={{ color: '#9e9e9e' }}>
                {edu.year}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                {edu.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Education;
