import logo from './house-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="NavBar">
        <h1>Houzey</h1>
      </div>

      <header className="App-header">
        <img src={logo} className="Home-logo" alt="logo" />
      </header>

      <body className="App-body">
        <h1>Everyone likes a nicely decorated home... <br></br>but it's not always so easy</h1>
        <h1>"Where did I put those again?"</h1>
        <h1>"Aaaarrgghhh. So tangled, and so many broken lights!"</h1>
        <h1>"Oh boy, here we go."</h1>
        <h1>"Aaaaahh."</h1>
        <h1>"Where am I supposed to put all this stuff?"</h1>
        <h1>"Not again..."</h1>
      </body>

      <body className="App-body">
        <h1>Let our Houzey Helpers, help you.</h1>
        <h2>Use our website or app to purchase or rent decorations</h2>
        <h2>Schedule a time that works for you</h2>
        <h2>Then just wait for our Houzey Helpers to show up</h2>
        <h2>Watch our team do everything - from installation to takedown</h2>
      </body>

    </div>
  );
}

export default App;

/*
<p>
          Testing edits via GitHub. Testing edits via VS Code.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
*/
