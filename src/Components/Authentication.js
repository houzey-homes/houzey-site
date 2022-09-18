import '../Styles/main.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';

Amplify.configure(awsExports);

export default function Authentication() {
  return (

    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div className="AuthenticationForm">
            <h1>Hello {user.email}!</h1>
            <h1>You're here early! Thanks! Expect more features soon.<br></br>Stay tuned for our launch on October 1st, 2022.</h1>
            <button onClick={signOut}>Sign out</button>
          </div>
        </main>
      )}
    </Authenticator>

  );
}