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
      <Box sx={{ padding: 3, m: 10 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 10 }}>
          Contact Me
        </Typography>
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" gutterBottom>Contact Information</Typography>
              <Typography variant="body1">Phone: +92 3144965144</Typography>
              <Typography variant="body1">Email: infoaliraza@gmail.com</Typography>
              <Typography variant="body1">LinkedIn: https://www.linkedin.com/in/ali-raza-afzal-b76120214/</Typography>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3 }}>
              <Typography variant="h6" gutterBottom>Send a Message</Typography>
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
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
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
          mt: 5
        }}
      >

       <Footer/>
      </Box>
    </>
  );
};

export default Contact;

