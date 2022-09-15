import logo from './house-logo.png';
import cartoon1 from './cartoon1.png';
import cartoon1v2 from './cartoon1v2.png';
import cartoon2 from './cartoon2.png';
import cartoon3 from './cartoon3.png';
import cartoon4 from './cartoon4.png';
import cartoon5 from './cartoon5.png';
import './App.css';

const src =
  "https://user-images.githubusercontent.com/10952434/169947473-e58fc522-8305-4540-a5a6-cc84a64bccd8.mp4";

function App() {
  return (
    <div className="App">

      <div className="NameBar">
        <h1>Houzey</h1>
      </div>

      <header className="App-header">
        <img src={logo} className="Home-logo" alt="logo" />
      </header>

      <body className="App-body">
        <h1>Everyone likes a nicely decorated home... 
          <br></br>but it's not always so easy.</h1>
        <img src={cartoon1} className="Cartoon" alt="cartoon" />
        <img src={cartoon1v2} className="Cartoon" alt="cartoon" />
        <img src={cartoon2} className="Cartoon" alt="cartoon" />
        <img src={cartoon3} className="Img-rotate" alt="cartoon" />
        <img src={cartoon4} className="Cartoon" alt="cartoon" />
        <img src={cartoon5} className="Cartoon" alt="cartoon" />
      </body>

      <body className="App-body">
        <h1>Let our Houzey Helpers, help you.</h1>
        <h2>Use our website or app to purchase or rent decorations.</h2>
        <h2>Schedule a time that works for you.</h2>
        <h2>Then, just wait for our Houzey Helpers to show up.</h2>
        <h2>Watch our team do everything - from installation to takedown.</h2>
      </body>


      <div className="App-demo">
        <h1>Here's what our app might look like, for starters:</h1>
        <video controls width="325px" autoPlay loop muted>
          <source src={src} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>

      <div className="App-earlysignup">
        <h1>Interested?<br></br>We bet you are!</h1>
        <h2>Houzey is currently fundraising!<br></br>Investors can contact us at investors@houzey.homes.</h2>
        <h2>Reach out to us via contact@houzey.homes for any other comments/questions.</h2>
        <h2>Sign up below for news and early access, including exclusive decorations and discounts.</h2>
        <form target="_self" class="form" action="https://formsubmit.co/e899263a40b59e81fe00e813f4e1325b " method="POST">       
          <input type="text" name="name" class="form-control" placeholder="Name" required/> 
          <br></br>
          <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
          <br></br>
          <input type="hidden" name="_captcha" value="false"/>
          <input type="text" name="_honey" style={{display: 'none'}}/>
          <input type="hidden" name="_next" value="https://houzey.homes"/>
          <button type="submit" class="form-button">Submit</button>
        </form>
      </div>

    </div>
  );
}

export default App;

