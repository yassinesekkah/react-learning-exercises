import { useState } from "react";

function App() {

  const [products, setProducts] = useState([
    { id: 1, title: "iPhone", price: 1000 },
    { id: 2, title: "Macbook", price: 2000 },
    { id: 3, title: "Playstation", price: 800 }
  ])

  const handleDiscount = (id) => {
    setProducts(
      products.map((product) => {
        if(product.id === id){
          return {...product, price: product.price - 100}
        }
        return product
      })
    )
  }

  const handleDelete = (id) => {
    setProducts(
      products.filter(product => product.id !== id)
    )
  }

  return(
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>price: {product.price}</p>

          <button onClick={() => handleDiscount(product.id)}>
            discount -100
          </button>

          <button onClick={() => handleDelete(product.id)}>
            delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default App;