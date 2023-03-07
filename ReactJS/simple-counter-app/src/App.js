import React, {useState} from 'react';
import './index.css';


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container my-5">
      <div className='card text-center my-5'>
        <div className='card-body'>
          <h1>Simple Counter App</h1>
          <div className='my-5'>
            <h2 className='my-5' id='CounterBtn'>Counter - {count}</h2>
            <button className='btn btn-secondary mx-3' id='ResetBtn' onClick={() => setCount(0)} disabled={count === 0}>Reset</button>
            <button className='btn btn-success mx-3' id='IncrementBtn' onClick={() => setCount(count + 5)}>Increment</button>
            <button className='btn btn-danger mx-3' id='DecrementBtn' onClick={() => setCount(count - 5)} disabled={count === 0}>Decrement</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
