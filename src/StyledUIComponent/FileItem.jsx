const FileItem = ({ file, removeFile, initialFiles }) => {
  const IMG_URL = import.meta.env.VITE_API_IMGURL;

  const humanFileSize = (size) => {
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return (
      (size / Math.pow(1024, i)).toFixed(2) + ['B', 'kB', 'MB', 'GB', 'TB'][i]
    );
  };

  const renderPreview = () => {
    if (file.type?.includes('image/')) {
      return (
        <img
          src={`${file.url.includes(IMG_URL) ? '' : IMG_URL}${file.url}`}
          alt={file.name}
          className="absolute inset-0 z-0 object-cover w-full h-full border-4 border-white preview"
        />
      );
    }
    return (
      <svg
        className="absolute w-12 h-12 text-gray-400 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    );
  };

  return (
    <div className="relative flex flex-col items-center overflow-hidden text-center bg-gray-100 border rounded select-none">
      <div className="flex flex-col items-center justify-center w-full h-48">
        <button
          className="absolute top-0 right-0 z-50 p-1 bg-white rounded-bl focus:outline-none"
          type="button"
          onClick={() => removeFile(file.url)}
        >
          <svg
            className="w-4 h-4 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>

        {renderPreview()}

        <div className="absolute bottom-0 left-0 right-0 flex flex-col p-2 text-xs bg-white bg-opacity-50">
          <span className="w-full font-bold text-gray-900 truncate">
            {file.name}
          </span>
          <span className="text-xs text-gray-900">
            {humanFileSize(file.size)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FileItem;
