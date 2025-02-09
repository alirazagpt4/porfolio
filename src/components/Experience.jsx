import { EXPERIENCES } from "../data/index";
import { Grid, Typography, Box, Chip } from "@mui/material";

const Experience = () => {
  return (
    <Box sx={{ borderBottom: '1px solid #1a1a1a', pb: 4 }}>
      <Typography variant="h4" align="center" sx={{ my: 5 }}>
        Experience
      </Typography>
      <Box>
        {EXPERIENCES.map((experience, index) => (
          <Grid container spacing={2} key={index} sx={{ mb: 4, justifyContent: { lg: 'center' } }}>
            {/* Year Section */}
            <Grid item xs={12} lg={3}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {experience.year}
              </Typography>
            </Grid>

            {/* Role and Description Section */}
            <Grid item xs={12} lg={9}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {experience.role} -{' '}
                <Typography component="span" variant="body2" color="primary">
                  {experience.company}
                </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {experience.description}
              </Typography>

              {/* Technologies */}
              {experience.technologies.map((tech, techIndex) => (
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

export default Experience;
