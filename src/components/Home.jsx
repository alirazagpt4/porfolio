// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { logout } from '../feature/authReducer'; // Import the logout action

import { Container } from '@mui/system';
import Footer from './Footer';
import Hero from './Hero';
import Experience from './Experience';
import Technologies from './Technologies';
import Education from './Education';


const Home = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(logout()); // Dispatch the logout action
  //   localStorage.clear(); // Clear all localStorage (optional based on your app logic)
  //   navigate('/'); // Navigate back to the login page
  // };

  return (
    <>
    <Container>
          <Hero/>
          <Education/>
          <Technologies/>
          <Experience/>
        <Footer/>
    </Container>
     

    </>
  );
};

export default Home;
