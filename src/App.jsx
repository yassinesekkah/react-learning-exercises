import Header from "./components/Header";

function Footer(){
  return (
    <>
      <p>This is the footer</p>
    </>
  )
}

function Main(){
  return(
    <>
      <p>This is the main content</p>
    </> 
  )
}

function App(){
  let bool = "man" < "woman";
  return(
    <div style={{color: "red", backgroundColor: "green", fontSize: "20px"}}>
      <h1>My react app</h1>
      { bool && <Header   text="This is the header" des="des " /> }
      <Main />
      <Footer />
    </div>
  )
}
export default App;