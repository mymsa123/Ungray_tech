import React, { useState } from 'react';
import styled from 'styled-components';
import Dashboard from './Dashboard';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'trial' && password === 'assignment123') {
      setIsLoggedIn(true);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Container>
          <LoginBox>
            <Title>Login</Title>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>Login</Button>
            {error && <Error>{error}</Error>}
          </LoginBox>
        </Container>
      )}
    </>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const LoginBox = styled.div`
  padding:20px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Error = styled.p`
  color: red;
  margin-top: 10px;
`;