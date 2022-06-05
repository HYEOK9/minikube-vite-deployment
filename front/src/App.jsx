import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
    const onClick = async () => {
        try {
            await axios.get('http://localhost:3001/req').then((res) => {
                alert(`${res.data}`);
            });
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>Hello Vite + React!</p>
                <p>
                    <button type='button' onClick={onClick}>
                        Communicate with server
                    </button>
                </p>
            </header>
        </div>
    );
}

export default App;
