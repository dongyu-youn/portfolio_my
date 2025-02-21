import { useState } from 'react';
import FileItem from './FileItem';

const FileList = ({ files, removeFile, updateFileOrder }) => {
  const [draggingIndex, setDraggingIndex] = useState(null);
  // 파일이 없을 경우 빈 배열 사용
  const safeFiles = files || [];
  const count = safeFiles.length > 4 ? 4 : safeFiles.length || 1;

  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (event, index) => {
    event.preventDefault();
    if (draggingIndex === null || draggingIndex === index) return;

    const reorderedFiles = [...safeFiles];
    const [movedFile] = reorderedFiles.splice(draggingIndex, 1);
    reorderedFiles.splice(index, 0, movedFile);

    updateFileOrder(reorderedFiles);
    setDraggingIndex(index);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  // 파일이 없을 경우 렌더링하지 않음
  if (!safeFiles.length) {
    return null;
  }

  return (
    <div
      className={`grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4`}
      style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
    >
      {safeFiles.map((file, index) => (
        <div
          key={file.preview || file.url || index}
          draggable="true"
          onDragStart={() => handleDragStart(index)}
          onDragOver={(event) => handleDragOver(event, index)}
          onDragEnd={handleDragEnd}
        >
          <FileItem
            file={{
              name: file.name,
              preview: file.preview,
              url: file.url,
            }}
            removeFile={() => removeFile(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default FileList;
