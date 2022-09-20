import '../Styles/main.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from 'aws-amplify';

let username = '';
Auth.currentAuthenticatedUser({
  bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
}).then(user => (username = user.attributes.email))
.catch(err => console.log(err));

const QuickZipForm = () => {
  const [usercity, setUsercity] = useState('');
  
  const navigate = useNavigate();

  const handleQuickZipFormSubmit = (e) => {
    e.preventDefault();
    navigate('/Browsing', { state: { user: username, city: usercity } });
  }

    return (
        <main>

            <div className="GuestZipForm">

              <div className="GuestZipFormBody">
                
                <div className="GuestBackgroundWrapper">

                  <h3>Select a city to start browsing</h3>    
                  
                  <div className="GuestZipFormInput">     

                    <form onSubmit={handleQuickZipFormSubmit}>                               
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

export default QuickZipForm;