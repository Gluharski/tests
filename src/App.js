import { Route, Routes } from 'react-router-dom';
import "./App.css";

// import Navbar from './components/Navbar/Navbar';
import FormulaOne from "./components/FormulaOne/FormulaOne";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/f1" exact element={<FormulaOne />} />
      </Routes>

      <Navbar />
    </>
  );
};

export default App;
