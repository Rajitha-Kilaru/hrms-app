import React from 'react';
import './App.css'
import LoginPage from './Components/LoginPage';
import RecruiterScreen from './Components/RecruiterScreen';
import ForgetPswdPage from './Components/ForgetPswdPage';
import ExecutiveScreen from './Components/ExecutiveScreen';
import AdminScreen from './Components/AdminScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { rolldropdown, showNavbar } from './Actions/actions';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducers);
  const logout = () => {
    dispatch(showNavbar(false));
  };
  return (
    <div className="App">
      {/* <Navbar /> */}
      {state.showNavbar && (
        <div style={{ justifyContent: 'space-between', display: 'flex' }}>
          <div>
            <h1>Resource One It Solutions</h1>
          </div>
          <div
            style={{
              marginTop: '39px',
            }}
          >
            <select onChange={(e) => dispatch(rolldropdown(e.target.value))}>
              {/* <option default select hidden>
                select
              </option> */}
              <option>Experienced</option>
              <option>Fresher</option>
            </select>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'black',
                fontWeight: 'bold',
              }}
              onClick={logout}
            >
              Log out
            </Link>
            <span>|</span>
            <FontAwesomeIcon icon={faCircleUser} />
            <span style={{ color: 'red', fontWeight: '700' }}>
              {state.loginUserName}
            </span>
          </div>
        </div>
      )}
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/recruiterScreen" element={<RecruiterScreen />} />
          <Route path="/forgetpswd" element={<ForgetPswdPage />} />
          <Route path="/executiveScreen" element={<ExecutiveScreen />} />
          <Route path="/adminScreen" element={<AdminScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;