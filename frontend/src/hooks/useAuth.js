// frontend/src/hooks/useAuth.js
import { useContext } from 'react';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';

// Hook implementation
function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  const login = async (email, password) => {
    const res = await api.post('/api/auth/login', { email, password });
    const { token, user: userData } = res.data;
    if (token) {
      localStorage.setItem('token', token);
      // put token on axios default for future requests
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    setUser(userData);
    return res.data;
  };

  const register = async (name, email, password) => {
    const res = await api.post('/api/auth/register', { name, email, password });
    const { token, user: userData } = res.data;
    if (token) {
      localStorage.setItem('token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    setUser(userData);
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return { user, login, register, logout };
}

// Export as both default and named to avoid import style errors
export default useAuth;
export { useAuth };
