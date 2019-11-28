import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


// Import custom styles for our application
import './App.css';

// Import pages
import HomePage from './components/home/HomePage';

function App() {
  /*
  Code for logged in state - carried over from other project
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);
  */

  const loggedInRouter = (
            <Router>
                <div className="container mt-5">
                    <Switch>
                        <Route path="/">
                          <HomePage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
  );

  return <HomePage/>;
}

export default App;
