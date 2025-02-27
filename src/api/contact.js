import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 클라이언트 데이터를 서버에 보내기 위한 변환
const prepareContactData = (data) => ({
  name: data.name || '',
  contact: data.contact || '',
  company: data.company || '',
  inquiryType: data.inquiryType || '',
  message: data.message || '',
  selectedTypes: data.selectedTypes ? JSON.stringify(data.selectedTypes) : '[]',
  agreed: data.agreed || false,
  email: data.email || '',
});

// 서버 데이터를 클라이언트에서 사용하기 위한 변환
const parseContactData = (data) => {
  return {
    ...data,
    selectedTypes: data.selectedTypes ? JSON.parse(data.selectedTypes) : [],
  };
};

// 모든 문의 조회
export const getAllContacts = async () => {
  try {
    const response = await api.get('/contact');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 새 문의 생성
export const createContact = async (contactData) => {
  try {
    const response = await api.post('/contact', contactData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 특정 문의 조회
export const getContactById = async (id) => {
  try {
    const response = await api.get(`/contact/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 특정 문의 삭제
export const deleteContact = async (id) => {
  try {
    const response = await api.delete(`/contact/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
