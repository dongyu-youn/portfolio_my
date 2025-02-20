import { useState } from 'react';
import { imageUpload } from '@/api/uploadApi';

const useUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = async (e, imageOnly, maxFile, initialFiles = []) => {
    e.preventDefault();
    const files = Array.from(e.target.files);

    if (files.length + uploadedFiles.length > maxFile) {
      alert(`최대 ${maxFile}개의 파일만 업로드할 수 있습니다.`);
      return;
    }

    for (const file of files) {
      if (imageOnly && !file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드할 수 있습니다.');
        return;
      }

      try {
        const result = await imageUpload(file);
        if (result.url) {
          setUploadedFiles((prev) => [...prev, result]);
        }
      } catch (error) {
        console.error('File upload failed:', error);
      }
    }
  };

  const handleDrop = async (e, imageOnly, maxFile) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);

    if (files.length + uploadedFiles.length > maxFile) {
      alert(`최대 ${maxFile}개의 파일만 업로드할 수 있습니다.`);
      return;
    }

    for (const file of files) {
      if (imageOnly && !file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드할 수 있습니다.');
        return;
      }

      try {
        const result = await imageUpload(file);
        if (result.url) {
          setUploadedFiles((prev) => [...prev, result]);
        }
      } catch (error) {
        console.error('File upload failed:', error);
      }
    }
  };

  const handleFileDelete = (fileUrl) => {
    setUploadedFiles((prev) => prev.filter((file) => file.url !== fileUrl));
  };

  return {
    uploadedFiles,
    setUploadedFiles,
    handleFileChange,
    handleDrop,
    handleFileDelete,
  };
};

export default useUpload;
