import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import counterContext from './context/counterContext';

function App() {
  const [ count, setCount ] = useState(0);
  return (
    <div className = "container">
      <counterContext.Provider value = {{ count, setCount }}>
        <h1 className = "demo">Demo Of UseContext</h1>
        <Navbar />
        <button className = "button" onClick = {() => setCount(count + 1)}> Counter { count } </button>
      </counterContext.Provider>
    </div >
  );
}

export default App;
