import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Welcome To JavaTpoint. 
           
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello this is Venkateswarlu Dande.<br></br>This is my first React App</h1>
        <h1>Hello this is Dande Venkateswarlu.<br></br>This is my first React App</h1>
        <h1>Hello this is Dande Venkateswarlu.<br></br>This is my first React App</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



//export default App;
export default withAuthenticator(App);
