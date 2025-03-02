const DropArea = ({
  fileInputRef,
  handleFileChange,
  handleDrop,
  imageOnly,
  maxFile,
  initialFiles,
  description,
}) => {
  return (
    <div
      className="relative flex flex-col text-gray-400 border border-gray-600 border-dashed rounded cursor-pointer"
      style={{
        height: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        // DataTransfer 객체에서 파일 목록을 배열로 변환
        const droppedFiles = Array.from(e.dataTransfer.files);

        // 이미지 파일만 필터링 (imageOnly가 true인 경우)
        const validFiles = imageOnly
          ? droppedFiles.filter((file) => file.type.startsWith('image/'))
          : droppedFiles;

        if (imageOnly && validFiles.length !== droppedFiles.length) {
          alert('이미지 파일만 업로드 가능합니다.');
          return;
        }

        handleDrop(validFiles);
      }}
    >
      <input
        type="file"
        ref={fileInputRef}
        multiple={maxFile > 1}
        accept={imageOnly ? 'image/*' : '*/*'}
        className="absolute inset-0 z-10 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
        onChange={(e) => {
          const files = Array.from(e.target.files);
          handleFileChange(files);
        }}
      />
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <svg
          className="w-6 h-6 mr-1 text-current-50"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="m-0">
          파일을 드래그하여 옮기거나 클릭하여 파일을 선택해 주세요.
        </p>
        {maxFile > 1 && (
          <p className="mt-1 text-sm text-gray-500">
            최대 {maxFile}개의 파일을 업로드할 수 있습니다.
          </p>
        )}
        {description && (
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        )}
      </div>
    </div>
  );
};

export default DropArea;
