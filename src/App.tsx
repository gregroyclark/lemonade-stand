import { FC } from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';

const App: FC = () => {
    return (
        <div className="App">
            <h3>Lemonade Stand!</h3>
            <ProductList />
        </div>
    );
};

export default App;
