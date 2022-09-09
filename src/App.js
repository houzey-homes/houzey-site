import logo from './house-logo.png';
import './App.css';

const src =
  "https://user-images.githubusercontent.com/10952434/169947473-e58fc522-8305-4540-a5a6-cc84a64bccd8.mp4";

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
        <h1>"Where did I put those decorations again?"</h1>
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


      <div className="App-demo">
        <h1>Here's what our app might look like, for starters:</h1>
        <video controls width="325px" autoPlay loop muted>
          <source src={src} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>

      <div className="App-earlysignup">
        <h1>Interested? We bet you are!</h1>
        <h2>We are currently fundraising! Interested investors can contact us at investors@houzey.homes
          <br></br>Sign up below for news and early access, including exclusive decorations and discounts.</h2>
      </div>

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
