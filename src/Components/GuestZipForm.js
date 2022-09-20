import '../Styles/main.css';
import { useState } from "react";

const GuestZipForm = () => {
  const [title, setTitle] = useState('');
    return (
        <main>

            <div className="GuestZipForm">

              <div className="GuestZipFormBody">
                <h3>Enter a valid city to start browsing<br></br>(e.g., Salem or 01970)</h3>
                <h3>Or keep scrolling to learn a little more</h3>

                <h2>Currently Serving:<br></br>Salem, Peabody, Lynn</h2>
                <p>More locations coming soon!</p>
                
                <div className="GuestZipFormInput">

                  <form>
                    <label></label>
                    <input 
                      type="text"
                      placeholder="Enter City or Zip Code"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <button className="Button">GO</button>
                  </form>

                </div>

                <p>Sign in to use your stored home address</p>

              </div>
                
            </div>

        </main>
    );
}

export default GuestZipForm;