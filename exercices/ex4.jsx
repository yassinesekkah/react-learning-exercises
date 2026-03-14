
function App() {
  const products = [
    { id: 1, title: "iPhone", price: 500 },
    { id: 2, title: "Macbook", price: 900 },
    { id: 3, title: "Playstation", price: 600 }
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>Title: {product.title} </p>
          <p>Price: {product.price} </p>
        </div>

      ))}
    </div>
  )
}

export default App;