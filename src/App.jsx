
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './routes/AllRoutes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
     <CssBaseline/>
    <Router>
      <AllRoutes />
    </Router>
    </ThemeProvider>
  );
}

export default App;
