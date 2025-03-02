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

  // 최초 한 번만 value와 uploadedFiles 동기화
  useEffect(() => {
    if (!isInitialized && value && value.length > 0) {
      setUploadedFiles(value);
      setPreviewFiles(
        value.map((file) => ({
          name: typeof file === 'string' ? file.split('/').pop() : file.name,
          preview: typeof file === 'string' ? file : URL.createObjectURL(file),
        }))
      );
      setIsInitialized(true);
    } else if (!isInitialized) {
      setIsInitialized(true);
    }
  }, [isInitialized, value, setUploadedFiles]);

  // uploadedFiles 변경 시 상위 컴포넌트에 업데이트 전달
  const handleUpload = async (files) => {
    try {
      // 기존 파일들과 새로운 파일들을 합침
      const existingFiles = [...uploadedFiles];
      const newFiles = files.filter(
        (file) =>
          !existingFiles.some(
            (existing) => existing.name === file.name || existing === file
          )
      );

      const allFiles = [...existingFiles, ...newFiles];

      // maxFile 제한 확인
      if (allFiles.length > maxFile) {
        alert(`최대 ${maxFile}개의 파일만 업로드할 수 있습니다.`);
        return;
      }

      const previews = allFiles.map((file) => ({
        name: typeof file === 'string' ? file.split('/').pop() : file.name,
        preview: typeof file === 'string' ? file : URL.createObjectURL(file),
      }));

      setPreviewFiles(previews);
      setUploadedFiles(allFiles);
      onFilesUpdate(allFiles);
    } catch (error) {
      console.error('파일 업로드 실패:', error);
    }
  };

  const onDrop = async (acceptedFiles) => {
    if (acceptedFiles?.length > 0) {
      await handleUpload(Array.from(acceptedFiles));
    }
  };

  const handleFileDelete = (index) => {
    console.log('6. 파일 삭제 전:', { uploadedFiles, previewFiles });
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    const newPreviews = previewFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    setPreviewFiles(newPreviews);
    console.log('7. 파일 삭제 후:', { newFiles, newPreviews });
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

  return (
    <div
      className={`bg-white ${
        isProgramPage ? 'p-10' : ''
      } rounded py-2 sm:py-4 md:py-6 lg:py-10`}
    >
      <DropArea
        fileInputRef={fileInputRef}
        handleFileChange={async (files) => {
          // files 배열을 직접 받아서 처리
          if (files && files.length > 0) {
            await handleUpload(files);
          }
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
          const newUploadedFiles = newOrder.map(
            (file) =>
              uploadedFiles[
                previewFiles.findIndex((p) => p.preview === file.preview)
              ]
          );
          setUploadedFiles(newUploadedFiles);
          onFilesUpdate(newUploadedFiles);
        }}
      />
    </div>
  );
};

export default DropAreaInput;
