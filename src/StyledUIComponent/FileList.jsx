import { useState } from 'react';
import FileItem from './FileItem';

const FileList = ({ files, removeFile, updateFileOrder, initialFiles }) => {
  const [draggingIndex, setDraggingIndex] = useState(null);
  const count = files.length > 4 ? 4 : files.length || 1;

  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (event, index) => {
    event.preventDefault();
    if (draggingIndex === null || draggingIndex === index) return;

    const reorderedFiles = [...files];
    const [movedFile] = reorderedFiles.splice(draggingIndex, 1);
    reorderedFiles.splice(index, 0, movedFile);

    updateFileOrder(reorderedFiles);
    setDraggingIndex(index);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  return (
    <div
      className={`grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4`}
      style={{ gridTemplateColumns: `repeat(${count},minmax(0, 1fr))` }}
    >
      {files.map((file, index) => (
        <div
          key={file.url}
          draggable="true"
          onDragStart={() => handleDragStart(index)}
          onDragOver={(event) => handleDragOver(event, index)}
          onDragEnd={handleDragEnd}
        >
          <FileItem
            initialFiles={initialFiles}
            file={file}
            removeFile={removeFile}
          />
        </div>
      ))}
    </div>
  );
};

export default FileList;
