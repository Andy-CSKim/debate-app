import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getRoot, getKm, postItem, putItem } from './fetch';

function App() {
  const [msg, setMsg] = useState(''); // [Read, Write]
  const [mile, setMile] = useState(0.0);
  const [km, setKm] = useState(0.0);

  const [price, setPrice] = useState(0.0); // [Read, Write]
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

  // class Item(BaseModel):
  //   name: str
  //   description: str | None = None
  //   price: float
  //   tax: float | None = None

  // class User(BaseModel):
  // username: str
  // full_name: str | None = None

  // @app.post("/items")
  // async def create_item(item: Item):
  const sendPrice = () => {
    console.log(`price = ${price}`);

    const item = { 'name': 'unknown',
                  'price': price};

    // send Item with name to server
    postItem(item).then((data) => {
      console.log(data);

      setResp(JSON.stringify(data));
    });

  }

// @app.put("/items")
// async def update_item(item: Item, user: User, q:str|None = None):  
  const sendNameAndPrice = () => {
    console.log(`name = ${name}, price = ${price}`);

    const obj = { 'item':{'name': 'unknown', 'price': price},
                  'user':{'username': name}};

    // send Item with name to server
    putItem(obj).then((data) => {
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

      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={sendPrice}>Send Price</button><br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={sendNameAndPrice}>Send Name & Price</button><br />
      <p> {resp}</p>

    </div>
  );
}

export default App;
