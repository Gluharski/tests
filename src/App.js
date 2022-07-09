import { Route, Routes } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import "./App.css";

import Navbar from './components/Navbar/Navbar';
import Home from './components/views/Home/Home';
import Live from './components/views/Live/Live';
import Videos from './components/views/Videos/Videos';
import Discussions from './components/views/Discussions/Discussions';
import About from './components/views/About/About';

function App() {
  return (
    <Container>
    <Grid container>
      <Routes>
          <Route path='home' exact element={<Home />} />
          <Route path="live" element={<Live />} />
          <Route path="videos" element={<Videos />} />
          <Route path="discussions" element={<Discussions />} />
          <Route path="about" element={<About />} />
      </Routes>
      <Navbar />
    </Grid>
    </Container>
  );
};

export default App;
