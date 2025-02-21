import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../../api/admin';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { setAdmin } = useAdminAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await adminLogin(username, password);

      if (response.success) {
        console.log('Admin Login Response:', response);
        console.log('Admin Token:', response.token);
        // 토큰을 localStorage에 저장
        localStorage.setItem('adminToken', response.token);
        setAdmin(response.admin);
        setSuccess(true);
      }
    } catch (error) {
      setError('로그인에 실패했습니다.');
    }
  };

  if (success) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-bold text-green-600">
          관리자 로그인에 성공하였습니다
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center lg:mt-40  py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            관리자 로그인
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="아이디"
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-green hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
