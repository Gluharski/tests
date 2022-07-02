import {useState} from 'react';

export const Button = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    // setCounter(counter + 1); // race condition
    setCounter(oldCounter => oldCounter + 1); // good practic
  }

  return(
    <>
      <button onClick={handleClick} >
        {counter}
      </button>
    </>
  )
}