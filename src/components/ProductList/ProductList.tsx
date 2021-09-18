import { FC, useState } from 'react';
import './ProductList.css';

const ProductList: FC = () => {
    const [numberOfLemons, updateNumberOfLemons] = useState<number>(0);
    const [amountOfSugar, updateAmountOfSugar] = useState<number>(0);
    const [numberOfIceCubes, updateNumberOfIceCubes] = useState<number>(0);

    return (
        <div className="ProductList">
            <div className="Product">
                <p>Lemons</p>
                <div className="Count">
                    <button
                        onClick={() =>
                            updateNumberOfLemons(numberOfLemons > 0 ? numberOfLemons - 1 : 0)
                        }
                    >
                        -
                    </button>
                    <h4>{numberOfLemons}</h4>
                    <button onClick={() => updateNumberOfLemons(numberOfLemons + 1)}>+</button>
                </div>
            </div>
            <div className="Product">
                <p>Sugar</p>
                <div className="Count">
                    <button
                        onClick={() =>
                            updateAmountOfSugar(amountOfSugar > 0 ? amountOfSugar - 1 : 0)
                        }
                    >
                        -
                    </button>
                    <h4>{amountOfSugar}</h4>
                    <button onClick={() => updateAmountOfSugar(amountOfSugar + 1)}>+</button>
                </div>
            </div>
            <div className="Product">
                <p>Ice Cubes</p>
                <div className="Count">
                    <button
                        onClick={() =>
                            updateNumberOfIceCubes(numberOfIceCubes > 0 ? numberOfIceCubes - 1 : 0)
                        }
                    >
                        -
                    </button>
                    <h4>{numberOfIceCubes}</h4>
                    <button onClick={() => updateNumberOfIceCubes(numberOfIceCubes + 1)}>+</button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
