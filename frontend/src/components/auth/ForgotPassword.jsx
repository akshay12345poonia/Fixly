// frontend/src/components/auth/ForgotPassword.jsx
import React, { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Adjust endpoint if your backend uses /api/auth/forgot-password
      await api.post('/api/auth/forgot-password', { email });
      setMessage('If that email exists, a reset link was sent.');
      // optionally redirect or show more UI after a timeout
      setTimeout(() => navigate('/login'), 2500);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          className="block w-full p-2 border border-gray-300 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded"
        >
          Send Reset Link
        </button>
      </form>

      {message && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
          {message}
        </div>
      )}
    </div>
  );
}
