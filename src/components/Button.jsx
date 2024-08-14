import React from 'react';
import { useContext } from 'react';
import counterContext from '../context/counterContext';

function Button() {

    const {count, setCount} = useContext(counterContext);
  return (
    <div>
      <button className = "btn" onClick = {() => setCount(count + 1)}>Click Me{count}</button>
    </div>
  );
}

export default Button;


