import { Box, Grid, Typography, Avatar } from "@mui/material";

import mongologo from '../images/mongodb.png';
import jslogo from '../images/js.png';
import expresslogo from '../images/express.png';
import muilogo from '../images/mui.png';
import nodejslogo from '../images/nodejs.png';
import reactlogo from '../images/react.png';

const Skills = () => {
  const skills = [
    { name: 'MongoDB', image: mongologo },
    { name: 'JavaScript', image: jslogo },
    { name: 'Express.js', image: expresslogo },
    { name: 'React', image: reactlogo },
    { name: 'Material-UI', image: muilogo },
    { name: 'Node.js', image: nodejslogo },
  ];

  return (
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>Skills</Typography>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                src={skill.image} 
                alt={skill.name}
                sx={{ width: 60, height: 60, mb: 1 }}
              />
              <Typography variant="body1">{skill.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
