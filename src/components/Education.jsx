import { EDUCATION } from "../data/index";
import { Grid, Typography, Box, Chip } from "@mui/material";

const Education = () => {
  return (
    <Box sx={{ borderBottom: '1px solid #1a1a1a', pb: 6 }}>
      <Typography variant="h4" align="center" sx={{ my: 5 }}>
        Education
      </Typography>
      <Box>
        {EDUCATION.map((edu, index) => (
          <Grid container spacing={2} key={index} sx={{ mb: 4, justifyContent: { lg: 'center' } }}>
            {/* Year Section */}
            <Grid item xs={12} lg={3}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {edu.year}
              </Typography>
            </Grid>

            {/* Degree and Description Section */}
            <Grid item xs={12} lg={9}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {edu.degree} -{' '}
                <Typography component="span" variant="body2" color="primary">
                  {edu.institution}, {edu.city}
                </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {edu.description}
              </Typography>

              {/* Technologies (optional if applicable) */}
              {edu.technologies && edu.technologies.length > 0 &&
                edu.technologies.map((tech, techIndex) => (
                  <Chip
                    key={techIndex}
                    label={tech}
                    sx={{
                      mr: 1,
                      mt: 1,
                      backgroundColor: '#1a1a1a',
                      color: '#bb86fc',
                      fontWeight: '500',
                    }}
                  />
                ))}
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default Education;
