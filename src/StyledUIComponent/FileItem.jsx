const FileItem = ({ file, removeFile }) => {
  if (!file) return null;

  const imageUrl = file.preview || file.url;

  return (
    <div className="relative group">
      <div className="w-full aspect-square relative overflow-hidden rounded border border-gray-200">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={file.name || '업로드된 이미지'}
            className="w-full h-full object-cover"
          />
        )}
        <button
          onClick={removeFile}
          className="absolute top-2 right-2 bg-gray-100 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <p className="mt-1 text-sm text-gray-500 truncate">{file.name}</p>
    </div>
  );
};

export default FileItem;
