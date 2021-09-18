import { FC } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';

const App: FC = () => {
    return (
        <div className="App">
            <h3>Lemonade Stand!</h3>
            <HelloWorld />
        </div>
    );
};

export default App;
