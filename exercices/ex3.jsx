
function App() {
    const products = ["Iphone", "Playstation", "Samsung"];

    return (
        <div>
            {products.map((product, index) => (
                <p key={index}> {index} - {product} </p>
            )) }
        </div>
    )
}

export default App;