import { useState } from 'react';
import GuestPage from './GuestPage';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      {isLoggedIn ? (
        <>
          <LogoutButton onClick={handleLogout} />
          <UserPage />
        </>
      ) : (
        <>
          <LoginButton onClick={handleLogin} />
          <GuestPage />
        </>
      )}
    </div>
  );
}

export default App;
