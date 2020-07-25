// In App.js in a new project

import React, { Component } from "react";
import { ActivityIndicator } from 'react-native'
import { auth } from './src/services/firebase';
import {
  Route,
  NativeRouter as Router,
  Switch,
  Redirect
} from "react-router-native";
import { LoginScreen, RegisterScreen } from './src/screens/AuthScreen.js';
import MainNavigation from './src/navigation/MainNavigation.js'
import * as Font from 'expo-font';

export function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

export function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/tabnavigator', state: { from: props.location } }} />}
    />
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true
    };
  }
  // check whether user is logged in
  async componentDidMount() {
    await Font.loadAsync({
      Cochin: require("./assets/fonts/Cochin-LT-Font.ttf"),
    });
    
    auth().onAuthStateChanged(user => {
      console.log("Authchange")
      console.log(user)
      if (user) {
        this.setState({
          authenticated: true,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false
        });
      }
    });
  }

  render() {
    return this.state.loading === true ? (
      <ActivityIndicator animating={true}></ActivityIndicator>
    ) : (
        <Router>
          <Switch>
            <PublicRoute exact authenticated={this.state.authenticated} path="/" component={LoginScreen} />
            <PublicRoute authenticated={this.state.authenticated} path="/login" component={LoginScreen} />
            <PublicRoute authenticated={this.state.authenticated} path="/register" component={RegisterScreen} />
            <PrivateRoute
              path="/tabnavigator"
              authenticated={this.state.authenticated}
              component={MainNavigation}
            />
          </Switch>
        </Router>
      );
  }
}

export default App;