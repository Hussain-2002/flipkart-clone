import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import { Box } from '@mui/material';

function App() {
  return (
    <DataProvider>
      <Header />
      <Box sx={{ marginTop: '64px', padding: '20px' }}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
