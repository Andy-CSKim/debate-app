import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getRoot } from './fetch';

function App() {
  const [msg, setMsg] = useState('');

  const clickRoot = () => {
    console.log('getRoot');

    getRoot().then((data) => {
      console.log(data);
      setMsg(JSON.stringify(data));
    });
  }

  return (
    <div className="App">
      <button onClick={clickRoot}>localhost:3001/</button>
      <br />
      <br />

      <p>{msg}</p>

    </div>
  );
}

export default App;
