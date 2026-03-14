import { useState } from "react";

function App() {
    
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3> {count} </h3>
      <button onClick={() => setCount(count + 1)}>
        Add 
      </button>
    </div>
  )
}

export default App;