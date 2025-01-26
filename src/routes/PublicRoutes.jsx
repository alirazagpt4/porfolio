// import { useRoutes, Navigate,  } from 'react-router-dom';
// // import { useEffect } from 'react';
// import Login from '../components/Login';
// import SignUp from '../components/SignUp';

// const PublicRoutes = () => {
//   // const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   // useEffect(() => {
//   //   if (token === 'true') {
//   //     // If token is true, redirect to home when accessing login or signup page
//   //     navigate('/home');
//   //   }
//   // }, [token, navigate]);

//   return useRoutes([
//     {
//       path: '/',
//       element: token === 'true' ? <Navigate to="/home" /> : <Login />,
//     },
//     {
//       path: '/signup',
//       element: <SignUp />,
//     },
//   ]);
// };

// export default PublicRoutes;
