  import { useState } from "react";


  function App(){

    const products = ["iPhone", "Macbook", "Playstation"];

    const [show, setShow] = useState(false);

    return (
      <div>
        <button onClick={() => setShow(!show)}>
          Show Product
        </button>
        {
          show && products.map((product) => (
            <p>{product}</p>
          ))
        }
      </div>
    )
  }

  export default App;