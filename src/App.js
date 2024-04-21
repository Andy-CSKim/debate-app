import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getRoot } from './fetch';

function App() {
  const [msg, setMsg] = useState('');
  const [mile, setMile] = useState(0.0);
  const [km, setKm] = useState(0.0);

  const clickRoot = () => {
    console.log('getRoot');

    getRoot().then((data) => {
      console.log(data);
      setMsg(JSON.stringify(data));
    });
  }
  const cvtMile = () => {
    console.log(`mile = ${mile}`);
    setKm(mile * 1.60934);
  }

  return (
    <div className="App">
      <button onClick={clickRoot}>localhost:3001/</button><br />
      <p>{msg}</p><br />
      <input type="text" value={mile} onChange={(e) => setMile(e.target.value)} />
      <button onClick={cvtMile}>Mile to Km</button><br />
      {/* interger to string */}
      <p>{km.toString()}</p><br />
    </div>
  );
}

export default App;
