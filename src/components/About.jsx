// import { Box, Typography } from '@mui/material';
import { Box, Grid, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import teacher from "../images/teacher.png";
import social from "../images/socialapp.jpg";
import hrm from "../images/hrm.png";
import Footer from "./Footer";
import { useTheme } from "@mui/system"; 
// import { useNavigate } from "react-router-dom"; 


const projects = [
  {
    name: "Teacher Management System",
    description: "A simple teacher management system built with Express and MongoDB to manage teacher data.",
    technologies: "Express, MongoDB",
    image: teacher, 
    github: "https://github.com/yourusername/teacher-management-system", 
    liveDemo: "https://yourportfolio.com/teacher-management", 
  },
  {
    name: "Social App (MERN Stack)",
    description: "A social app built using the MERN stack (MongoDB, Express, React, Node.js). Includes user profiles, posts, and social features.",
    technologies: "MERN Stack (MongoDB, Express, React, Node.js)",
    image: social, 
    github: "https://github.com/yourusername/social-app", 
    liveDemo: "https://yourportfolio.com/social-app", 
  },
  {
    name: "HRM Management System (hr-boto-project)",
    description: "An HRM management system focusing on employee and attendance modules. Features XLSX-based attendance creation and viewing, React charts, and more.",
    technologies: "MERN Stack, React Charts, NodeMailer, JWT, CORS, Bcrypt, NodeCron, Morgan, Helmet",
    image: hrm, 
    github: "https://github.com/yourusername/hr-boto-project", // Replace with actual GitHub URL
    liveDemo: "https://yourportfolio.com/hrm-management", // Replace with your live demo link
  },
];


const About = () => {
  const theme = useTheme();
  return (<>
  
    <Box sx={{ padding: 5 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{m:10}}>
        My Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345,
                boxShadow: "0px 4px 10px 0px", // Default box shadow
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)", // Slight scale effect on hover
                  boxShadow: `0px 4px 20px 0px ${theme.palette.primary.main}`, // Shadow with primary color on hover
                }, }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image} // Image for the project
                alt={project.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {project.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Technologies Used:</strong> {project.technologies}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={project.github}
                  target="_blank"
                  startIcon={<GitHubIcon />}
                >
                  GitHub
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  href={project.liveDemo}
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    

    <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
          backgroundColor: "dark",
          color: "white",
          textAlign: "center",
          p: 2,
          mt:5
        }}
      >
          
        <Footer/>
      </Box>
      </>
  );
};

export default About;
