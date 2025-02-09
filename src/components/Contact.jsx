import { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can integrate your email service or API to handle form submissions
    console.log('Message Sent:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    alert('Your message has been sent!');
  };

  return (
    <>
      <Box sx={{ padding: { xs: 2, sm: 3, md: 5 }, marginTop: { xs: 4, sm: 5 }, marginBottom: { xs: 4, sm: 5 } }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 3 }}>
          Contact Me
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Contact Information */}
          <Grid item xs={12} sm={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Paper sx={{ padding: 3, boxShadow: 4, width: '100%' }}>
              <Typography variant="h6" gutterBottom align="center">
                Contact Information
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Phone:</strong> +92 3144965144
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Email:</strong> infoaliraza@gmail.com
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>LinkedIn:</strong>{' '}
                <a href="https://www.linkedin.com/in/ali-raza-afzal-b76120214/" target="_blank" rel="noopener noreferrer">
                  Ali Raza LinkedIn
                </a>
              </Typography>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} sm={12} md={6}>
            <Paper sx={{ padding: 3, boxShadow: 4 }}>
              <Typography variant="h6" gutterBottom>
                Send a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{ marginBottom: 2 }}
                  required
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{ marginBottom: 2 }}
                  required
                />
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  sx={{ marginBottom: 2 }}
                  required
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  sx={{ marginBottom: 2 }}
                  multiline
                  rows={4}
                  required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ padding: 1 }}>
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30vh',
          backgroundColor: theme => theme.palette.primary.main,
          color: '#fff',
          textAlign: 'center',
          p: 2,
          mt: 5,
          borderRadius: 3,
        }}
      >
        <Typography variant="h6">Thank you for reaching out!</Typography>
        <Typography variant="body2">I will get back to you as soon as possible.</Typography>
      </Box>

      <Footer />
    </>
  );
};

export default Contact;
