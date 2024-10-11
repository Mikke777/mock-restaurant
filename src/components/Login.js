import React from 'react';
import './Login.css';
import Swal from 'sweetalert2';

const Login = ({ onSectionChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');

    Swal.fire({
      icon: 'success',
      title: 'Login Successful!',
      text: `Welcome back, ${username}!`,
    }).then(() => {
      onSectionChange('home');
    });
  };

  return (
    <section className='Login'>
      <div className='login-box'>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" required />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>

    </section>
  );
}

export default Login;
