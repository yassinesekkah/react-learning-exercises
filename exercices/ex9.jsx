import { useState } from "react";


function App() {

  const [auctions, setAuctions] = useState([
    { id: 1, title: "iPhone 15", price: 500 },
    { id: 2, title: "Macbook Pro", price: 900 },
    { id: 3, title: "PS5", price: 600 }
  ])

  const handleBid = (id) => {
    setAuctions(
      auctions.map((auction) => {
        if(auction.id === id){
          return { ...auction, price: auction.price + 10 };
        }
        return auction;
      })
    );
  };

  return (
    <div>
      {auctions.map((auction) => (
        <div key={auction.id}>
          <p>{auction.title}</p>
          <p>current price: {auction.price}$</p>

          <button onClick={() => handleBid(auction.id)}>
            bid +10
          </button>
        </div>
      ))}
    </div>
  )
}

export default App;