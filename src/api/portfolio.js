import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';
const API_URL = `${API_BASE_URL}/api`;

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
    const imageUrl = portfolioData.image;
    const absoluteImageUrl = imageUrl.startsWith('http')
      ? imageUrl
      : `${API_BASE_URL}${imageUrl}`;

    const modifiedData = {
      ...portfolioData,
      image: absoluteImageUrl,
    };

    console.log('포트폴리오 생성 요청 데이터:', modifiedData);
    const response = await api.post('/portfolio', modifiedData);
    console.log('포트폴리오 생성 응답:', response);
    return response;
  } catch (error) {
    console.error('포트폴리오 생성 에러:', error);
    throw error;
  }
};

// 특정 포트폴리오 조회
export const getPortfolioById = async (id) => {
  try {
    console.log('포트폴리오 상세 조회 요청:', id);
    const response = await api.get(`/portfolio/${id}`);
    console.log('포트폴리오 상세 응답:', response.data);
    return response.data;
  } catch (error) {
    console.error('포트폴리오 상세 조회 에러:', error.response || error);
    throw error;
  }
};

// 특정 포트폴리오 수정
export const updatePortfolio = async (id, portfolioData) => {
  try {
    console.log('포트폴리오 수정 요청 데이터:', { id, portfolioData });
    const response = await api.put(`/portfolio/${id}`, portfolioData);
    console.log('포트폴리오 수정 응답:', response);
    return response;
  } catch (error) {
    console.error('포트폴리오 수정 에러:', error);
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
