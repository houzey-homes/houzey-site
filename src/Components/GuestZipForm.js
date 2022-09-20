import '../Styles/main.css';
import { useState } from "react";

const GuestZipForm = () => {
  const [useremail] = useState('Guest');
  const [usercity, setUsercity] = useState('');

  const handleGuestBrowseFormSubmit = (e) => {
    e.preventDefault();
    const userinfo = { useremail, usercity };

    console.log(userinfo);
  }

    return (
        <main>

            <div className="GuestZipForm">

              <div className="GuestZipFormBody">
                
                <div className="GuestBackgroundWrapper">

                  <h2>Currently Serving:<br></br>Salem, Peabody, Lynn</h2>
                  <h3>Select a city to start browsing</h3>
                  <h3>Or keep scrolling to learn a little more</h3>
                  
                  <p>More locations coming soon!</p>
                  
                  <div className="GuestZipFormInput">     

                    <form onSubmit={handleGuestBrowseFormSubmit}>                               
                      <select
                      value={usercity}
                      onChange={(e) => setUsercity(e.target.value) }
                      >
                        <option value="">Select City</option>
                        <option value="Salem">Salem</option>
                        <option value="Peabody">Peabody</option>
                        <option value="Lynn">Lynn</option>
                      </select> 
                      <button className="Button">GO</button>
                    </form>

                  </div>

                  <p>Sign in to use your stored home address</p>

                </div>

            </div>
                
                
            </div>

        </main>
    );
}

export default GuestZipForm;