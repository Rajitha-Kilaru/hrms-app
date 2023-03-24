import React, { useState } from 'react';
import {
  // emailEnteredValue,
  // passwordEnteredValue,
  showNavbar,
  loginDetailsAction,
  loginUserName,
  rolldropdown,
} from '../Actions/actions';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const emails = ['hr@recruiter.com', 'hr@executive.com', 'hr@admin.com'];

  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });
  const [emailerrmsg, setEmailerrmsg] = useState();
  const [pswderrmsg, setPswderrmsg] = useState();
  const dispatch = useDispatch();
  const handleLoginDetails = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnBlur = () => {
    if (
      new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
        loginDetails.email
      )
    ) {
      setEmailerrmsg();
    } else {
      setEmailerrmsg('Please Enter Valid Email');
    }
    if (
      new RegExp(
        '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
      ).test(loginDetails.password)
    ) {
      setPswderrmsg();
    } else {
      setPswderrmsg('Please Enter Valid Password');
    }
  };
  const handleLogin = () => {
    if (
      !emailerrmsg &&
      !pswderrmsg &&
      loginDetails.email.length > 0 &&
      loginDetails.password.length > 0 &&
      emails.includes(loginDetails.email)
    ) {
      dispatch(showNavbar(true));
      dispatch(loginDetailsAction(loginDetails));
      if (loginDetails.email.includes('recruiter')) {
        dispatch(loginUserName('Recruiter'));
        navigate('/recruiterScreen');
      } else if (loginDetails.email.includes('executive')) {
        dispatch(rolldropdown('Experienced'));
        dispatch(loginUserName('Executive'));
        navigate('/executiveScreen');
      } else {
        dispatch(loginUserName('Admin'));
        navigate('/adminScreen');
      }
    }
  };
  return (
    <div>
      <h1>Resource One IT Solutions</h1>
      <div>
        <h4>Login</h4>
        <input
          id='email'
          type="email"
          name="email"
          data-testid = "email"
          // value={state.email}
          value={loginDetails.email}
          placeholder="Email"
          onChange={handleLoginDetails}
          // onChange={(e) => handleEmail(e.target.value)}
          onBlur={handleOnBlur}
        />{' '}
        <br />
        <p style={{ color: 'red' }}>{emailerrmsg}</p>
        <input
          type="password"
          name="password"
          // value={state.password}
          value={loginDetails.password}
          placeholder="Password"
          onChange={handleLoginDetails}
          // onChange={(e) => handlePassword(e.target.value)}
          onBlur={handleOnBlur}
        />
        <p style={{ color: 'red' }}>{pswderrmsg}</p>
        <div style={{ marginTop: '6px' }}>
          <button style={{ padding: '3px 4rem' }} onClick={handleLogin}>
            LOGIN
          </button>
        </div>
        <div style={{ marginTop: '10px', fontSize: '18px' }}>
          <Link to="/forgetpswd">Forget Password?</Link>
        </div>
      </div>
    </div>
  );
}
