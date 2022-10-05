import '../Styles/main.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuickZipGuestForm = () => {
  const [useremail] = useState('Guest');
  const [usercity, setUsercity] = useState('');

  const navigate = useNavigate();

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  const handleQuickZipGuestFormSubmit = (e) => {
    e.preventDefault();
    navigate('/Browsing', { state: { user: useremail, city: usercity } });
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

                    <form onSubmit={handleQuickZipGuestFormSubmit}>                               
                      <select
                      value={usercity}
                      onChange={(e) => setUsercity(e.target.value) }
                      >
                        <option value="">Select City</option>
                        <option value="Salem">Salem</option>
                        <option value="Peabody">Peabody</option>
                        <option value="Lynn">Lynn</option>
                      </select> 
                      <button onClick={scrollToTop} className="Button">GO</button>
                    </form>

                  </div>

                </div>

            </div>
                
                
            </div>

        </main>
    );
}

export default QuickZipGuestForm;