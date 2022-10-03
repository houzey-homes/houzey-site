import '../Styles/main.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
import HomeownerHome from '../Pages/HomeownerHome';

Amplify.configure(awsExports);

export default function Authentication() {
  return (

    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div className="AuthenticationForm">

            <div className="SignInGreeting">
              <h1>Welcome to Houzey!</h1>
              <h1>Thanks for making an account. Expect more features soon.<br></br></h1>
            </div>
        
            <HomeownerHome />

            <button className="Button" onClick={signOut}>SIGN OUT</button>
            
          </div>
        </main>
      )}
    </Authenticator>

  );
}