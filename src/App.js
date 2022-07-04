import "./App.css";

import PlayersList from "./components/TopScorers/PlayersList";
// import FormulaOne from "./components/FormulaOne/FormulaOne";
import LiveMatches from './components/LiveMatches/LiveMatchesLits';

function App() {
  return (
    <>
      <PlayersList />
      {/* <FormulaOne /> */}
      <LiveMatches />
    </>
  );
}

export default App;
