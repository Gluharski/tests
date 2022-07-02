import { useState } from 'react';

export const Counter = () => {
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState('black');

  const add = () => {
    setNumber(oldState => oldState + 1);
  };

  const reset = () => {
    setNumber(0);
  };

  const remove = () => {
    setNumber(oldState => oldState - 1);
  };

  return(
    <>
      <h1>{number}</h1>
      <button onClick={remove}>--</button>
      <button onClick={reset}>RESET</button>
      <button onClick={add}>++</button>
    </>
  )
}