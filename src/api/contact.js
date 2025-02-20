import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_IMG = import.meta.env.VITE_API_IMGURL;

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

export const getContactList = async () => {
  try {
    const response = await axios.get(`${API_URL}contact`);
    return response.data.map(parseContactData);
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getContactDetail = async (id) => {
  try {
    const response = await axios.get(`${API_URL}contact/${id}`);
    return parseContactData(response.data);
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const createContact = async (data) => {
  try {
    const preparedData = prepareContactData(data);
    return await axios.post(`${API_URL}contact`, preparedData);
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const updateContact = async (data) => {
  try {
    const preparedData = prepareContactData(data);
    return await axios.put(`${API_URL}contact/${data.id}`, preparedData);
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const deleteContact = async (id) => {
  try {
    return await axios.delete(`${API_URL}contact/${id}`);
  } catch (error) {
    console.error(error);
    return error;
  }
};
