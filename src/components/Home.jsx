// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { logout } from '../feature/authReducer'; // Import the logout action
import { Box, Typography } from '@mui/material';
import { Avatar } from "@mui/material";
import Image from '../images/profile-pic.png'
import Skills from './Skills';
import DownloadResume from './DownloadResume';
import Footer from './Footer';


const Home = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(logout()); // Dispatch the logout action
  //   localStorage.clear(); // Clear all localStorage (optional based on your app logic)
  //   navigate('/'); // Navigate back to the login page
  // };

  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: '100vh',
    //     gap: 2,
    //   }}
    // >
    //   <Typography variant="h4">Welcome to Home</Typography>
    //   {/* <Button
    //     variant="contained"
    //     color="primary"
    //     onClick={handleLogout}
    //   >
    //     Logout
    //   </Button> */}
    // </Box>
    <>
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
          mt:15
        }}
      >
        <Typography variant='h3' component="h1" gutterBottom >
          Hi , I am Ali Raza Afzal
        </Typography>
        <Typography variant='h5' component="h1" gutterBottom >
          A Software Engineer passionate about creating awesome experiences.
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "600px", mt: 2 }} gutterBottom>
          I love building creative and efficient solutions for the web, blending
          design and functionality to create impactful user experiences.
        </Typography>
        <Avatar
          src={Image}
          alt="Ali Raza"
          sx={{
            width: 150,
            height: 150,
            mt: 3,
            mb: 2,
            border: "3px solid white",
          }}
          gutterBottom
        />

      
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
          mt:15
        }}
      >
        
       

        <Skills/>
        
        
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
        
        <DownloadResume  />
  
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

export default Home;
