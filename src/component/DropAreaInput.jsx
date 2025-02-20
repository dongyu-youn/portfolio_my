import { useEffect, useRef, useState } from 'react';
import DropArea from '@/StyledUIComponent/DropArea.jsx';
import FileList from '@/StyledUIComponent/FileList.jsx';
import useUpload from '@/hook/useUpload.jsx';
import { useLocation } from 'react-router-dom';

const DropAreaInput = ({
  onFilesUpdate,
  maxFile = Infinity,
  imageOnly = true,
  value,
  initialFiles,
  description,
}) => {
  const {
    uploadedFiles,
    handleFileChange,
    handleDrop,
    handleFileDelete,
    setUploadedFiles,
  } = useUpload();
  const [isInitialized, setIsInitialized] = useState(false);
  const fileInputRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!isInitialized && value && value.length > 0) {
      setUploadedFiles(value);
      setIsInitialized(true);
    } else if (!isInitialized && (!value || value.length === 0)) {
      setIsInitialized(true);
    }
  }, [isInitialized, value, setUploadedFiles]);

  useEffect(() => {
    if (isInitialized) {
      const isEqual =
        value &&
        uploadedFiles.length === value.length &&
        uploadedFiles.every((f, i) => f === value[i]);
      if (!isEqual) {
        onFilesUpdate(uploadedFiles);
      }
    }
  }, [uploadedFiles, isInitialized, onFilesUpdate, value]);

  const updateFileOrder = (newOrder) => {
    setUploadedFiles(newOrder);
  };

  const isProgramPage = location.pathname.includes('program');

  return (
    <div
      className={`bg-white ${
        isProgramPage ? 'p-10' : ''
      } rounded py-2 sm:py-4 md:py-6 lg:py-10`}
    >
      <DropArea
        fileInputRef={fileInputRef}
        handleFileChange={handleFileChange}
        handleDrop={handleDrop}
        imageOnly={imageOnly}
        maxFile={maxFile}
        initialFiles={initialFiles}
        description={description}
      />
      <FileList
        initialFiles={initialFiles}
        files={uploadedFiles}
        removeFile={handleFileDelete}
        updateFileOrder={updateFileOrder}
      />
    </div>
  );
};

export default DropAreaInput;
