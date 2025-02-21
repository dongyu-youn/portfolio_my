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
  const { uploadedFiles, handleFileChange, handleDrop, setUploadedFiles } =
    useUpload();
  const [isInitialized, setIsInitialized] = useState(false);
  const [previewFiles, setPreviewFiles] = useState([]);
  const fileInputRef = useRef(null);
  const location = useLocation();
  const isProgramPage = location.pathname.includes('program');

  useEffect(() => {
    if (!isInitialized && value && value.length > 0) {
      setUploadedFiles(value);
      setPreviewFiles(
        value.map((file) => ({
          name: file.name,
          preview: file instanceof File ? URL.createObjectURL(file) : file,
        }))
      );
      setIsInitialized(true);
    } else if (!isInitialized) {
      setIsInitialized(true);
    }
  }, [isInitialized, value, setUploadedFiles]);

  const handleUpload = async (files) => {
    try {
      console.log('업로드할 파일:', files);
      // 파일 미리보기 생성
      const previews = files.map((file) => ({
        name: file.name,
        preview: URL.createObjectURL(file),
      }));
      setPreviewFiles(previews);
      setUploadedFiles(files);
      onFilesUpdate(files);
    } catch (error) {
      console.error('파일 업로드 실패:', error);
    }
  };

  const onDrop = async (acceptedFiles) => {
    if (acceptedFiles?.length > 0) {
      await handleUpload(acceptedFiles);
    }
  };

  const handleFileDelete = (index) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    const newPreviews = previewFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    setPreviewFiles(newPreviews);
    onFilesUpdate(newFiles);
  };

  // 컴포넌트 언마운트 시 URL.createObjectURL로 생성된 URL 해제
  useEffect(() => {
    return () => {
      previewFiles.forEach((file) => {
        if (file.preview && file.preview.startsWith('blob:')) {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, [previewFiles]);

  console.log('렌더링 상태:', { uploadedFiles, initialFiles });

  return (
    <div
      className={`bg-white ${
        isProgramPage ? 'p-10' : ''
      } rounded py-2 sm:py-4 md:py-6 lg:py-10`}
    >
      <DropArea
        fileInputRef={fileInputRef}
        handleFileChange={async (e) => {
          const files = Array.from(e.target.files);
          await handleUpload(files);
        }}
        handleDrop={onDrop}
        imageOnly={imageOnly}
        maxFile={maxFile}
        description={description}
      />
      <FileList
        files={previewFiles}
        removeFile={handleFileDelete}
        updateFileOrder={(newOrder) => {
          setPreviewFiles(newOrder);
          setUploadedFiles(
            newOrder.map(
              (file) =>
                uploadedFiles[
                  previewFiles.findIndex((p) => p.preview === file.preview)
                ]
            )
          );
        }}
      />
    </div>
  );
};

export default DropAreaInput;
