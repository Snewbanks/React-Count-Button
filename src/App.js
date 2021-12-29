import React, {useState} from 'react';

export default function App() {

  const [count, setCount ] = useState(0)

  return (
    <div>
      <h1>Clickable Counter Via React</h1>
      <p>My count is { count }</p>
      <button onClick={()=>setCount(count+1)}>Counter</button>
    </div>
  )

}

