import React from 'react';
import { useContext } from 'react';
import counterContext from '../context/counterContext';

function Home() {

    let {count} = useContext(counterContext);

  return (
    <div className = "home">
      Home Page {count}
    </div>
  );
}

export default Home;
