import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Header />
      <Box sx={{ marginTop: '64px', padding: '20px' }}>  
        {/* Margin increased for more spacing & padding for a better layout */}
        <Home />
      </Box>
    </div>
  );
}

export default App;
