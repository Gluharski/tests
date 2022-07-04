import { Route, Routes } from 'react-router-dom';
import "./App.css";

// import Navbar from './components/Navbar/Navbar';
import FormulaOne from "./components/FormulaOne/FormulaOne";
import LoL from './components/LoL/LeagueOfLegends';

function App() {
  return (
    <>
      <Routes>
        <Route path="/f1" exact element={<FormulaOne />} />
        <Route path="/league-of-legends" element={<LoL />} />
      </Routes>
      {/* <Navbar /> */}
      {/* <PlayersList /> */}
      {/* <LiveMatches /> */}
    </>
  );
};

export default App;
