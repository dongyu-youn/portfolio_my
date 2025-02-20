import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const filesUpload = async (files) => {
  const formData = new FormData();
  files.forEach((file) => formData.append('files', file));
  const res = await axios.post(`${API_URL}upload/files`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress: (progressEvent) => {
      const progress = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      console.log(`Upload Progress: ${progress}%`);
    },
  });
  return res.data;
};

export const imagesUpload = async (images) => {
  const formData = new FormData();
  images.forEach((image) => formData.append('images', image));
  const res = await axios.post(`${API_URL}upload/images`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress: (progressEvent) => {
      const progress = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      console.log(`Upload Progress: ${progress}%`);
    },
  });
  return res.data;
};

export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append('image', image);
  const res = await axios.post(`${API_URL}upload/image`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress: (progressEvent) => {
      const progress = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      console.log(`Upload Progress: ${progress}%`);
    },
  });
  return res.data;
};

export const deleteFiles = async (urls) => {
  const res = await axios.delete(`${API_URL}upload/files`, {
    data: { urls },
    headers: { 'Content-Type': 'application/json' },
  });
  return res.data;
};

export const deleteFile = async (url) => {
  const res = await axios.delete(`${API_URL}upload/file`, {
    data: { url },
    headers: { 'Content-Type': 'application/json' },
  });
  return res.data;
};
