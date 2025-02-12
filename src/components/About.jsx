import { Box, Grid, Card, CardContent, Typography, CardActions, Button, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Chip , Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import { projects } from "../data";
import Footer from "./Footer";

const About = () => {
  const [openDialog, setOpenDialog] = useState(false); // To manage dialog visibility
  const [selectedProject, setSelectedProject] = useState(null); // To store selected project

  const handleDialogOpen = (project) => {
    setSelectedProject(project);
    setOpenDialog(true); // Open dialog with selected project
  };

  const handleDialogClose = () => {
    setOpenDialog(false); // Close dialog
    setSelectedProject(null); // Clear selected project
  };

  return (
    <>
     <Container>

      <Box sx={{ padding: 5, margin:3}}>
        <Typography variant="h4" gutterBottom align="center" sx={{ m: 10 }}>
          My Projects
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
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
                    onClick={() => handleDialogOpen(project)}
                    >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Dialog for project details */}
      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="md" fullWidth>
        <DialogTitle>{selectedProject?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Description:
          </Typography>
          <Typography variant="body1" sx={{ color: '#9e9e9e' }}>
            {selectedProject?.fullDescription || "No detailed description available."}
          </Typography>

          <Box sx={{ my: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Technologies Used:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {selectedProject?.technologies.split(", ").map((tech, idx) => (
                <Chip
                key={idx}
                label={tech}
                sx={{
                  backgroundColor: '#bb86fc',
                  color: '#fff',
                  fontWeight: '500',
                }}
                />
              ))}
            </Box>
          </Box>

          {/* Demo and GitHub Links */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
            <Button variant="contained" color="primary" href={selectedProject?.github} target="_blank">
              GitHub
            </Button>
            <Button variant="contained" color="secondary" href={selectedProject?.liveDemo} target="_blank">
              Live Demo
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Footer />
              </Container>
    </>
  );
};

export default About;
