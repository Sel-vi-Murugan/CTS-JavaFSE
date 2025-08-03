import React from 'react';

function LoginButton(props) {
  return (
    <button onClick={props.onClick} style={{ padding: '10px 20px', fontSize: '16px',color:'White',backgroundColor:'skyblue',borderRadius:'30px',cursor:'pointer' }}>
      Login
    </button>
  );
}

export default LoginButton;
