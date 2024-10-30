// Login.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Login = ({ setIsAuthenticated }) => {
  const adminEmail = 'admin@example.com';
  const adminPassword = 'qwerty';

  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('qwerty');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem('is_authenticated', true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Incorrect email or password.',
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="small-container flex items-center justify-center h-screen">
    <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h1 className='font-bold text-2xl mb-4'>Admin Login</h1>
      
      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
      <input 
        id="email"
        type="email"
        name="email"
        placeholder="admin@example.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full px-3 py-2 border rounded mb-4"
      />
      
      <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="qwerty"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full px-3 py-2 border rounded mb-4"
      />
      
      <input
        type="submit"
        value="Login"
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded mt-4 cursor-pointer hover:bg-blue-600"
      />
    </form>
  </div>
  
  );
};

export default Login;
