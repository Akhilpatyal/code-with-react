import React, { useState, useCallback, useEffect,useRef } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
// useRef
const passwordref=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (number) str += '0123456789';
    if (charAllowed) str += '!@{}[]+_()*&^%$';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, charAllowed]);

const copyToClip=useCallback(()=>{
  passwordref.current?.select()
  // if only want to select selected words
  passwordref.current?.setSelectionRange(0,7)
  window.navigator.clipboard.writeText(password)
},[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, number, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto rounded-lg shadow-md px-4 my-8 py-3 text-orange-500 bg-slate-900">
      <h1 className="text-white text-center my-3">Password Generator</h1>

      <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordref}
        />
        <button onClick={copyToClip} className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0">copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex text-center gap-x-1">
          <input
            type="range"
            min={6}
            max={25}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(parseInt(e.target.value));
            }}
          />
          <label htmlFor="">Length : {length}</label>
        </div>

        <div className="flex text-center gap-x-1">
          <input
            type="checkbox"
            checked={number}
            onChange={(e) => {
              setNumber(e.target.checked);
            }}
          />
          <label htmlFor="">Number</label>
        </div>

        <div className="flex text-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={(e) => {
              setCharAllowed(e.target.checked);
            }}
          />
          <label htmlFor="">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
