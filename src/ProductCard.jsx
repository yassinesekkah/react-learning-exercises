function ProductCard(props){
    return(
        <div>
            <h2>{props.products.title}</h2>
            <p>{props.products.price}</p>   
            <p>test</p>
        </div>
    )
}

export default ProductCard;