import { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import CKEditorComponent from '@/StyledUIComponent/CKEditor/CKEditorComponent.jsx';
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

const initialPortfolioData = {
  id: 0,
  title: '',
  content: '',
  description: '',
  mainImage: [],
  tags: [],
  link: '',
};

const PortfolioEditPage = () => {
  const [portfolioData, setPortfolioData] = useState(initialPortfolioData);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (
      !portfolioData.title ||
      !portfolioData.content ||
      !portfolioData.description ||
      portfolioData.mainImage.length === 0
    ) {
      alert('필수 필드를 모두 입력해주세요.');
      return;
    }
    try {
      const response = await createPortfolio(portfolioData);
      if (response.status === 201) {
        alert('포트폴리오가 생성되었습니다.');
        navigate(-1);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Failed to create portfolio:', error);
      alert('포트폴리오 생성에 실패했습니다.');
    }
  };

  const handleUpdate = async () => {
    if (
      !portfolioData.title ||
      !portfolioData.content ||
      !portfolioData.description ||
      portfolioData.mainImage.length === 0
    ) {
      alert('필수 필드를 모두 입력해주세요.');
      return;
    }
    try {
      const response = await updatePortfolio({ ...portfolioData, id });
      if (response.status === 200) {
        alert('포트폴리오가 수정되었습니다.');
        navigate('/portfolio');
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Failed to update portfolio:', error);
      alert('포트폴리오 수정에 실패했습니다.');
    }
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
    (files) => {
      const current = portfolioData.mainImage;
      const isEqual =
        files.length === current.length &&
        files.every((file, idx) => file === current[idx]);

      if (!isEqual) {
        handlePortfolioDataChange('mainImage', files);
      }
    },
    [portfolioData.mainImage, handlePortfolioDataChange]
  );

  useEffect(() => {
    const loadData = async () => {
      if (id) {
        try {
          const response = await getPortfolioById(id);
          if (response) {
            const parsedMainImage = response.mainImage
              ? JSON.parse(response.mainImage)
              : [];

            setPortfolioData({
              id: response.id,
              title: response.title,
              content: response.content,
              description: response.description,
              mainImage: parsedMainImage,
              tags: response.tags || [],
              link: response.link || '',
            });
          }
        } catch (error) {
          console.error('Failed to load portfolio:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    loadData();
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
            <CKEditorComponent
              content={portfolioData.content}
              setContent={(value) =>
                handlePortfolioDataChange('content', value)
              }
            />
            <DropAreaInput
              value={portfolioData.mainImage}
              onFilesUpdate={onMainFilesUpdate}
              maxFile={1}
              initialFiles={portfolioData.mainImage}
              description="권장 이미지 크기: 367 x 450px"
            />
            <div className="flex justify-end gap-2 pt-4">
              <Button onClick={handleCancel}>취소</Button>
              {location.pathname.includes('edit') ? (
                <Button onClick={handleUpdate}>수정</Button>
              ) : (
                <Button onClick={handleCreate}>생성</Button>
              )}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default PortfolioEditPage;
