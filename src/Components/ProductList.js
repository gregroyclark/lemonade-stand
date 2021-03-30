import './ProductList.css'

const ProductList = () => {
    return (
        <div className="ProductList">
            <div className="Product">
                <p>Lemons</p>
                <div className="Count">
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                </div>
            </div>
            <div className="Product">
                <p>Sugar</p>
                <div className="Count">
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                </div>
            </div>
            <div className="Product">
                <p>Ice Cubes</p>
                <div className="Count">
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                </div>
            </div>
        </div>
    )
}

export default ProductList