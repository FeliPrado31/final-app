import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import reportWebVitals from './reportWebVitals';

import { firebase_app } from './data/config';


import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


//pages
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import SignIn from './pages/signin'





const Root = () => {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {

    firebase_app.auth().onAuthStateChanged(setCurrentUser);


    // eslint-disable-next-line
  }, []);

  console.log('User => ', currentUser)



  return (
    <div className="App">
      <BrowserRouter basename={`/`}>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route path={`${process.env.PUBLIC_URL}/register`} component={SignIn} />
          {currentUser !== null ?

            <>
              {/* dashboard menu */}
              {/* <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
                        return (<Redirect to={`${process.env.PUBLIC_URL}/dashboard/desafio/cards`} />)
                    }} /> */}
              <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
                return (<Redirect to={`${process.env.PUBLIC_URL}/dashboard`} />)
              }} />

              {/* Desafio Viajero */}
              <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />
            </>
            :
            <Redirect to={`${process.env.PUBLIC_URL}/login`} />

          }

        </Switch>
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
