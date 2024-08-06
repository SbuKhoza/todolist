import React from 'react';
import Sign from './components/Sign';
import './Signup.css';

function Signup() {
  return (
    <div className="sign-container">
      <div className='left'>
        <img src='doit.png' alt='login'></img>
      </div>
      <div className='right'>
        <Sign />
      </div>
    </div>
  );
}

export default Signup;
