// eslint-disable-next-line no-unused-vars
import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./signIn-and-signUp.styles.scss";

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
