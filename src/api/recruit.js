import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 모든 채용공고 조회
export const getAllRecruits = async () => {
  try {
    const response = await api.get('/recruit');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 새 채용공고 생성
export const createRecruit = async (recruitData) => {
  try {
    const response = await api.post('/recruit', recruitData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 특정 채용공고 조회
export const getRecruitById = async (id) => {
  try {
    const response = await api.get(`/recruit/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 특정 채용공고 수정
export const updateRecruit = async (id, recruitData) => {
  try {
    const response = await api.put(`/recruit/${id}`, recruitData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 특정 채용공고 삭제
export const deleteRecruit = async (id) => {
  try {
    const response = await api.delete(`/recruit/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
