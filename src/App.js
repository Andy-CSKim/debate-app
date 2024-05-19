import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getRoot, getKm, postItem } from './fetch';

function App() {
  const [msg, setMsg] = useState(''); // [Read, Write]
  const [mile, setMile] = useState(0.0);
  const [km, setKm] = useState(0.0);

  const [name, setName] = useState(''); // [Read, Write]
  const [resp, setResp] = useState(''); // [Read, Write

  // console.log(`App, msg=${msg}`);

  const cb = (data) => {  // function cb(data) { ... }
    console.log(data); // (3)
  }

  const clickRoot = () => {
    console.log('(1) getRoot in clickRook');

    //getRoot().then( cb ); 
    //getRoot().then( (data) => { console.log(data);} );

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
    getKm(mile).then((data) => {
      console.log(data);
      setKm(data.km);
    });
  }
  const sendItem = () => {
    console.log(`name = ${name}`);

    const obj = { 'name': name,
                  'price': 1000};

    // send Item with name to server
    postItem(obj).then((data) => {
      console.log(data);

      setResp(JSON.stringify(data));
    });

  }
    

  return (
    <div className="App">
      <button onClick={clickRoot}>localhost:3001/</button><br />
      <p>{msg}</p><br />

      <input type="text" value={mile} onChange={(e) => setMile(e.target.value)} />
      <button onClick={cvtMile}>Mile to Km</button><br />
      {/* interger to string */}
      <p>{km.toString()}</p><br />

      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={sendItem}>Post Item</button><br />
      <p> {resp}</p>

    </div>
  );
}

export default App;
