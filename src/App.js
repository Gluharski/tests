import "./App.css";

import PlayersList from "./components/TopScorers/PlayersList";
// import FormulaOne from "./components/FormulaOne/FormulaOne";
import LiveMatches from './components/LiveMatches/LiveMatchesLits';
import Navigation from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navigation />
      <PlayersList />
      {/* <FormulaOne /> */}
      <LiveMatches />
    </>
  );
}

export default App;
