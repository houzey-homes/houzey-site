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
            <h1>Welcome to Houzey!</h1>
            <h1>You're here early! Thanks! Expect more features soon.<br></br>Stay tuned for news about our launch on October 1st, 2022.</h1>

            <HomeownerHome />

            <button className="signoutButton" onClick={signOut}>SIGN OUT</button>
          </div>
        </main>
      )}
    </Authenticator>

  );
}