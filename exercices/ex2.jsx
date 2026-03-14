import { useState } from "react";

function App() {
    const products = ["Iphone", "Playstation", "Samsung"];

    return (
        <div>
            {products.map((product, index) => (
                <p key={index}> Product : {product} </p>
            )) }
        </div>
    )
}

export default App;