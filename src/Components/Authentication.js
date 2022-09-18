import '../Styles/main.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports.js';

Amplify.configure(awsExports);

export default function Authentication() {
  return (

    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <h1>Well, you're here early! Thanks! <br></br>Stay tuned for our launch on October 1st.</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>

  );
}