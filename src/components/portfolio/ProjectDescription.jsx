function ProjectDescription({ content, role }) {
  return (
    <>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-2">프로젝트 설명</h2>
        <p className="text-gray-700 whitespace-pre-wrap text-xl">{content}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">역할</h2>
        <p className="text-gray-700 text-xl">{role}</p>
      </div>
    </>
  );
}

export default ProjectDescription;
