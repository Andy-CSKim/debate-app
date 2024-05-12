import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getRoot, getKm } from './fetch';

function App() {
  const [msg, setMsg] = useState(''); // [Read, Write]
  const [mile, setMile] = useState(0.0);
  const [km, setKm] = useState(0.0);

  console.log(`App, msg=${msg}`);

  const clickRoot = () => {
    console.log('(1) getRoot in clickRook');

    getRoot().then((data) => {   // .then() is required to call async function
      console.log('(2) then in clickRook');
      console.log(data); // (3)
      setMsg(JSON.stringify(data));  // OK
      //msg = JSON.stringify(data);  // error becuase we can't change state directly
    });
    console.log('(4) end of clickRook');
  }
  const cvtMile = () => {
    console.log(`mile = ${mile}`);

    // local calculation --> request to server by using getKm()
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
