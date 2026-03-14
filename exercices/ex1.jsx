import { useState } from "react";

function App()
{
  const year = 2026;
  const site = "BidNow";

  return(
    <div>
      <h2>Welcome to {site} </h2>
      <h3>Year: {year} </h3>
    </div>
  )
}

export default App;