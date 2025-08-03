import React from 'react';

function LogoutButton(props) {
  return (
    <button onClick={props.onClick} style={{ padding: '10px 20px', fontSize: '16px',color:'White',backgroundColor:'skyblue',borderRadius:'30px',cursor:'pointer' }}>
      Logout
    </button>
  );
}

export default LogoutButton;
