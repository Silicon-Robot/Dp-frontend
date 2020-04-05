import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import SendMail from './auth/signIn/pages/SendMail';
import SignUp from './auth/signUp/pages/SignUp'
import SignIn from './auth/signIn/pages/SignIn';
// import Footer from './shared/UIElements/Footer'
import ForgotPassword from './auth/signIn/pages/ForgotPwd';
import DisplayTable from './shared/components/DisplayTable';

class App extends React.Component {
    render() {
        return (
         <Router >
            <Switch >
            <Route exact path = '/signin' > <SignIn /> </Route>
            <Route exact path = '/' > <DisplayTable /> </Route> 
            <Route exact path = '/resetpwd' > <ForgotPassword /> </Route> 
            <Route exact path = '/sendMail' > <SendMail /> </Route> 
            <Route exact path = '/signup' > <SignUp /> </Route>  
            <Redirect to = '/' />hello 
            </Switch>
      </Router >
        );
    }
}

export default App;