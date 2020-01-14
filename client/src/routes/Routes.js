import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "../pages/HomePage/HomePage";
import Cart from "../pages/Cart/Cart";
import Profiler from "../pages/Profiler/Profiler";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";

const Routes = ({ isAuthenticated = false }) => {
  return isAuthenticated ? (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/products/:id">{/* <ItemDetailsPage /> */}</Route>
      <Route path="/profile">
        <Profiler />
      </Route>
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/registration">
        <RegistrationForm />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

function mapStateToProps(state) {
  return {
    customer: state.isAuthenticated,
  };
}

export default connect(mapStateToProps)(Routes);
