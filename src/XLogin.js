import React, { useState } from 'react';

function XLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const[issubmitted,setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();


    
    if (username === 'user' && password === 'password') {
      setError("");
      setIsSubmitted(true);
    } else {
      setError('Invalid username or password');
      setIsSubmitted(false);
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto' }}>
        <h1>Login Page</h1>
        {issubmitted ? (
            <div>
                <p>Welcome, {username}!</p>
             </div>   
        ) : (
      <form onSubmit={handleSubmit}>
        {error && <p className='error'>{error}</p>}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '20px' }}>
          Submit
        </button>
      </form>
      )}
      
    </div>
  );
}

export default XLogin;
