import { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  Input,
  Textarea,
} from '@material-tailwind/react';
import {
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
} from '@/api/portfolio';
import DropAreaInput from '@/component/DropAreaInput';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const IMG_URL = import.meta.env.VITE_IMG_URL;
const API_BASE_URL = API_URL.replace('/api', ''); // '/api' 경로 제거

const initialPortfolioData = {
  id: 0,
  title: '',
  content: '',
  description: '',
  image: [],
  tags: [],
  link: '',
};

const PortfolioEditPage = () => {
  const [portfolioData, setPortfolioData] = useState(initialPortfolioData);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleImageUpload = async (file) => {
    console.log('이미지 업로드 로직 제거됨:', file);
    return URL.createObjectURL(file); // 임시로 로컬 URL 반환
  };

  const handleSubmit = async () => {
    const dataToSubmit = {
      ...portfolioData,
      image: portfolioData.image[0],
    };

    if (
      !dataToSubmit.title ||
      !dataToSubmit.description ||
      !dataToSubmit.image
    ) {
      alert('필수 필드를 모두 입력해주세요.');
      return;
    }

    console.log('제출 데이터:', dataToSubmit);
    alert('제출 로직이 제거되었습니다.');
    navigate(-1);
  };

  const handleCancel = () => {
    if (confirm('작성을 취소하시겠습니까?')) {
      navigate(-1);
    }
  };

  const handlePortfolioDataChange = useCallback((key, value) => {
    setPortfolioData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleTagsChange = (e) => {
    const tagsString = e.target.value;
    const tagsArray = tagsString
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag);
    handlePortfolioDataChange('tags', tagsArray);
  };

  const onMainFilesUpdate = useCallback(
    async (files) => {
      try {
        if (files && files.length > 0) {
          console.log('업로드 시도할 파일:', files[0]); // 디버깅
          const uploadedUrl = await handleImageUpload(files[0]);
          handlePortfolioDataChange('image', [uploadedUrl]);
        }
      } catch (error) {
        console.error('이미지 업로드 실패:', error);
      }
    },
    [handlePortfolioDataChange]
  );

  useEffect(() => {
    if (id) {
      console.log('포트폴리오 데이터 로딩 로직 제거됨:', id);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen w-full lg:py-12">
      <div className="w-full lg:w-[768px] 2xl:w-[1024px] mt-20 px-4">
        <Card className="p-4 sm:p-6 md:p-8 lg:p-10">
          <CardBody>
            <Input
              className="mb-6"
              size="lg"
              placeholder="제목을 입력해 주세요"
              label="제목"
              value={portfolioData.title}
              onChange={(e) =>
                handlePortfolioDataChange('title', e.target.value)
              }
            />
            <Textarea
              className="mb-6"
              size="lg"
              placeholder="간단한 설명을 입력해 주세요"
              label="설명"
              value={portfolioData.description}
              onChange={(e) =>
                handlePortfolioDataChange('description', e.target.value)
              }
            />
            <Input
              className="mb-6"
              size="lg"
              placeholder="태그를 입력해 주세요 (쉼표로 구분)"
              label="태그"
              value={portfolioData.tags.join(', ')}
              onChange={handleTagsChange}
            />
            <Input
              className="mb-6"
              size="lg"
              placeholder="관련 링크를 입력해 주세요"
              label="링크"
              value={portfolioData.link}
              onChange={(e) =>
                handlePortfolioDataChange('link', e.target.value)
              }
            />

            <DropAreaInput
              value={portfolioData.image}
              onFilesUpdate={onMainFilesUpdate}
              maxFile={1}
              initialFiles={portfolioData.image}
              description="권장 이미지 크기: 367 x 450px"
            />
            {portfolioData.image[0] && (
              <div className="">
                <img
                  src={portfolioData.image[0]}
                  alt="업로드된 이미지"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}
            <div className="flex justify-end gap-2 pt-4">
              <Button onClick={handleCancel} color="red">
                취소
              </Button>
              <Button
                onClick={handleSubmit}
                className="bg-[#00939A]"
                color={location.pathname.includes('edit') ? 'blue' : 'green'}
              >
                {location.pathname.includes('edit') ? '수정' : '생성'}
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default PortfolioEditPage;
