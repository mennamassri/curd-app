
import React, { useState, useEffect } from 'react';
import Login from './components/Login/index';
import Dashboard from './components/Dashboard/Dashboard'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const authStatus = JSON.parse(localStorage.getItem('is_authenticated'));
    setIsAuthenticated(Boolean(authStatus));
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
}

export default App;
