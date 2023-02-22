import logo from './Holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img className="logo" src={logo} alt="logo"></img>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email"></input>
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" name="password"></input>
        <button type="button">OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()}- {getFooterCopy(false)}</p>
      </div>
    </div>
  );
}

export default App;
