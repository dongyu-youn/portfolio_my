import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import { getRecruitById } from '../api/recruit';
import { Button } from '@material-tailwind/react';

function RecruitDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recruit, setRecruit] = useState(null);
  const adminToken = localStorage.getItem('adminToken');

  useEffect(() => {
    const fetchRecruit = async () => {
      try {
        const data = await getRecruitById(id);
        setRecruit(data);
      } catch (error) {
        console.error('채용공고를 불러오는데 실패했습니다:', error);
        navigate('/recruit');
      }
    };
    fetchRecruit();
  }, [id, navigate]);

  if (!recruit) return null;

  return (
    <PageLayout className="bg-white">
      <div className="lg:max-w-lg 2xl:max-w-2xl mx-auto lg:my-16 px-4 font-sans">
        <div className="mb-8">
          <div className="text-sm text-gray-600 mb-2">{recruit.category}</div>
          <h1 className="text-3xl font-bold mb-4">{recruit.title}</h1>
          <div className="text-gray-600">{recruit.date}</div>
        </div>

        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: recruit.content }} />
        </div>

        <div className="mt-8 flex gap-4">
          <Button onClick={() => navigate('/recruit')} className="bg-gray-500">
            목록으로
          </Button>
          {adminToken && (
            <>
              <Button
                onClick={() => navigate(`/recruit/${id}/edit`)}
                className="bg-[#00939A]"
              >
                수정
              </Button>
              <Button
                onClick={() => {
                  if (window.confirm('정말 삭제하시겠습니까?')) {
                    // 삭제 로직
                    navigate('/recruit');
                  }
                }}
                color="red"
              >
                삭제
              </Button>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
}

export default RecruitDetail;
