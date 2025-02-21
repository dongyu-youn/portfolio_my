import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { login as loginApi, checkAuth } from '@/api/authApi';
import { AuthContext } from '@/contexts/AuthContext';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  // context에서 필요한 값들을 가져와서 사용
  const { isAuthenticated, setIsAuthenticated, isLoading, setIsLoading } =
    context;

  let navigate;

  try {
    navigate = useNavigate();
  } catch (error) {
    navigate = () => {}; // Router 외부에서 호출될 경우 더미 함수 제공
  }

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await checkAuth();
        setIsAuthenticated(true);
      } catch (error) {
        console.error('인증 확인 실패:', error);
        handleLogout();
      }
    }
    setIsLoading(false);
  };

  const login = async (username, password) => {
    try {
      const data = await loginApi(username, password);
      if (data.token) {
        localStorage.setItem('adminToken', data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        setIsAuthenticated(true);
        navigate('/admin/dashboard');
        return true;
      }
      return false;
    } catch (error) {
      console.error('로그인 실패:', error);
      return false;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    delete axios.defaults.headers.common['Authorization'];
    setIsAuthenticated(false);
    if (navigate) {
      navigate('/admin/login');
    }
  };

  return {
    isAuthenticated,
    isLoading,
    login,
    logout: handleLogout,
  };
};

export default useAuth;
