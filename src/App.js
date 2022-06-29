import { useState } from 'react';
import './App.css';

// import Main from './components/Main';

function App() {
  const [count, setCounter] = useState(0);

  return (
    <>
      <h1>
        {count}
      </h1>

      <button onClick={() => setCounter(count + 1)}>Change State</button>
    </>
  );
}

export default App;
