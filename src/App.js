import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login/page';
import Register from './pages/auth/register/page';
import Profile from './pages/profile/page';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <Routes>

      <Route path="*" element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      } />

      <Route path="/login" element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />

      <Route path="/register" element={
        <PublicRoute>
          <Register />
        </PublicRoute>
      } />

    </Routes>
  );
}

export default App;
