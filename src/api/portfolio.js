import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 모든 포트폴리오 조회
export const getAllPortfolios = async () => {
  try {
    const response = await api.get('/portfolio');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 새 포트폴리오 생성
export const createPortfolio = async (portfolioData) => {
  try {
    const response = await api.post('/portfolio', portfolioData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 특정 포트폴리오 조회
export const getPortfolioById = async (id) => {
  try {
    const response = await api.get(`/portfolio/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 특정 포트폴리오 수정
export const updatePortfolio = async (id, portfolioData) => {
  try {
    const response = await api.put(`/portfolio/${id}`, portfolioData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 특정 포트폴리오 삭제
export const deletePortfolio = async (id) => {
  try {
    const response = await api.delete(`/portfolio/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
