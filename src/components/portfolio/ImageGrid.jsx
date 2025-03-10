function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {images?.map((image, index) => (
        <div key={index} className="aspect-square">
          <img
            src={image}
            alt={`프로젝트 이미지 ${index + 1}`}
            className="w-full h-full object-contain rounded-lg border border-gray-200"
          />
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
