import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// axios 인스턴스 생성 및 기본 설정
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // 쿠키 포함 설정
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 추가
api.interceptors.request.use(
  (config) => {
    config.headers['Access-Control-Allow-Credentials'] = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const adminLogin = async (username, password) => {
  try {
    const response = await api.post('admin/login', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('로그인 에러:', error);
    throw error;
  }
};

export const adminLogout = async () => {
  try {
    const response = await api.get('logout');
    return response.data;
  } catch (error) {
    console.error('로그아웃 에러:', error);
    throw error;
  }
};
