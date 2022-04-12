import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const SimpleTests = () => {
  const [data, setData] = useState('');
  const [toggle, setToggle] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  
  const onClick = () => setToggle(!toggle);
  
  const callback = useCallback(() => {
    setTimeout(() => {
      setData('Success')
    }, 100)
  }, [])
  
  useEffect(() => {
    callback();
  }, [callback])
  
  return (
    <div>
      {data && <div className="data-wrapper" style={{color: 'red'}}>{data}</div>}
      <h1>Hello World</h1>
      <h2>{toggle && <div data-testid="toggle-elem">toggle</div>}</h2>
      <h3 data-testid="value-elem">{value}</h3>
      <button onClick={onClick} data-testid="toggle-btn">Click me</button>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="input value..."/>
    </div>
  );
};

export default SimpleTests;
