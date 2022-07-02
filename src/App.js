import "./App.css";

import {Books} from "./components/BooksList";
import {Button} from './components/Button';
import {Counter} from './components/Counter';

function App() {
  const books = [
    {id: 1, description: 'Good morning!'},
    {id: 2, description: 'Good day!'},
    {id: 3, description: 'Good night!'},
  ]
  return (
    <>
      <Counter />
      <Button />
      <Books books={books} />
    </>
  );
}

export default App;
