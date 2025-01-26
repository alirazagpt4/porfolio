import { Box, Typography, Link, Grid, Container } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material"; // Optional: Add social media icons

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "dark", // Use the primary color from your theme
        color: "white",
        py: 3,
        mt: 15, // margin top to separate from other content
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {/* Column 1: Text or copyright */}
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" align="center">
              © {new Date().getFullYear()}  Ali Raza Afzal. All rights reserved.
            </Typography>
          </Grid>

          {/* Column 2: Links or social media */}
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Link
                  href="https://github.com/aliieey" // Replace with your GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "white", display: "flex", alignItems: "center" }}
                >
                  <GitHub sx={{ mr: 1 }} />
                  GitHub
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="https://www.linkedin.com/in/ali-raza-afzal-b76120214/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "white", display: "flex", alignItems: "center" }}
                >
                  <LinkedIn sx={{ mr: 1 }} />
                  LinkedIn
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="mailto:infoaliraza22@gmail.com" 
                  sx={{ color: "white", display: "flex", alignItems: "center" }}
                >
                  <Email sx={{ mr: 1 }} />
                  Email
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
