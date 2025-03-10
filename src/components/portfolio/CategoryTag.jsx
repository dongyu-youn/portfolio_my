const categoryStyles = {
  WEBSITE: {
    tagBg: 'bg-blue-100',
    tagText: 'text-blue-800',
    titleColor: 'text-blue-900',
  },
  APP: {
    tagBg: 'bg-green-100',
    tagText: 'text-green-800',
    titleColor: 'text-green-900',
  },
};

function CategoryTag({ category }) {
  const currentStyle = categoryStyles[category] || categoryStyles.WEBSITE;

  return (
    <div className="mb-4">
      <span
        className={`inline-block px-4 py-1.5 ${currentStyle.tagBg} ${currentStyle.tagText} rounded-md font-medium`}
      >
        {category}
      </span>
    </div>
  );
}

export default CategoryTag;
