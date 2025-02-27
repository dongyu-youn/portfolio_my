import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 모든 뉴스 조회
export const getAllNews = async () => {
  try {
    const response = await api.get('/news');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 새 뉴스 생성
export const createNews = async (newsData) => {
  try {
    const response = await api.post('/news', newsData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 특정 뉴스 조회
export const getNewsById = async (id) => {
  try {
    const response = await api.get(`/news/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 특정 뉴스 수정
export const updateNews = async (id, newsData) => {
  try {
    const response = await api.put(`/news/${String(id)}`, newsData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 특정 뉴스 삭제
export const deleteNews = async (id) => {
  try {
    const response = await api.delete(`/news/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
