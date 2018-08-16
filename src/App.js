import React, { Component } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { Authenticator, SignUp } from 'aws-amplify-react';
import aws_exports from './aws-exports';


Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-east-1:f610bb1e-d3cc-4d52-8079-132b53451868',
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-1',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-1_46nETTnGb',
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '4dv7fkj8cot7u29oia8pgrl8g0',
    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: true,
  }
});

class MySignUp extends Component {
  onSignup () {
    Auth.signUp({
      username: 'test2@mailinator.com',
      username: 'test2@mailinator.com',
      password: 'Test1234@', 
      // 'attributes': {
      //   'email': 'test2@mailinator.com',
      // }     
    })
    .then( d => console.log(d, '----data') )
    .catch( e => console.log(e,'-----error from Auth.signUp') )

  } 

  onSignIn () {
    Auth.signIn('test1@mailinator.com', 'Test1234@')
      .then(user => console.log(user))
      .catch(err => console.log(err));

  } 

  onSignOut () {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  } 



  
  render() {
    console.log(Auth.deleteUser)
    return <div>
      <button onClick={this.onSignup}>Sign Up</button>
      <button onClick={this.onConfirm}>Confirm</button>
      <button onClick={this.onSignIn}>SignIn</button>
      <button onClick={this.onSignOut}>SignOut</button>
    </div>
  }
}

class App extends Component {
  render() {
    return <Authenticator hideDefault={true}>
      <MySignUp />
    </Authenticator>
  }
}

export default App;