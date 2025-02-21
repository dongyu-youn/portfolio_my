import { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import CKEditorComponent from '@/StyledUIComponent/CKEditor/CKEditorComponent.jsx';
import { Button, Card, CardBody, Input } from '@material-tailwind/react';
import { getNewsById, createNews, updateNews } from '@/api/news';
import DropAreaInput from '@/component/DropAreaInput';

const initialNewsData = {
  id: 0,
  title: '',
  content: '',
  mainImage: [],
  category: '',
};

const NewsEditPage = () => {
  const [newsData, setNewsData] = useState(initialNewsData);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (
      !newsData.title ||
      !newsData.content ||
      newsData.mainImage.length === 0
    ) {
      alert('필수 필드를 모두 입력해주세요.');
      return;
    }
    try {
      const response = await createNews(newsData);
      if (response.status === 201) {
        alert('뉴스가 생성되었습니다.');
        navigate(-1);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Failed to create news:', error);
      alert('뉴스 생성에 실패했습니다.');
    }
  };

  const handleUpdate = async () => {
    if (
      !newsData.title ||
      !newsData.content ||
      newsData.mainImage.length === 0
    ) {
      alert('필수 필드를 모두 입력해주세요.');
      return;
    }
    try {
      const response = await updateNews({ ...newsData, id });
      if (response.status === 200) {
        alert('뉴스가 수정되었습니다.');
        navigate('/news');
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Failed to update news:', error);
      alert('뉴스 수정에 실패했습니다.');
    }
  };

  const handleCancel = () => {
    if (confirm('작성을 취소하시겠습니까?')) {
      navigate(-1);
    }
  };

  const handleNewsDataChange = useCallback((key, value) => {
    setNewsData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const onMainFilesUpdate = useCallback(
    (files) => {
      const current = newsData.mainImage;
      const isEqual =
        files.length === current.length &&
        files.every((file, idx) => file === current[idx]);

      if (!isEqual) {
        handleNewsDataChange('mainImage', files);
      }
    },
    [newsData.mainImage, handleNewsDataChange]
  );

  useEffect(() => {
    const loadData = async () => {
      if (id) {
        try {
          const response = await getNewsById(id);
          if (response) {
            const parsedMainImage = response.mainImage
              ? JSON.parse(response.mainImage)
              : [];

            setNewsData({
              id: response.id,
              title: response.title,
              content: response.content,
              mainImage: parsedMainImage,
              category: response.category || '',
            });
          }
        } catch (error) {
          console.error('Failed to load news:', error);
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
    <div className="flex justify-center items-center min-h-screen w-full py-12">
      <div className="w-full lg:w-[768px] 2xl:w-[1024px] mt-20 px-4">
        <Card className="p-4 sm:p-6 md:p-8 lg:p-10">
          <CardBody>
            <Input
              className="mb-6"
              size="lg"
              placeholder="제목을 입력해 주세요"
              label="제목"
              value={newsData.title}
              onChange={(e) => handleNewsDataChange('title', e.target.value)}
            />
            <Input
              className="mb-6"
              size="lg"
              placeholder="카테고리를 입력해 주세요"
              label="카테고리"
              value={newsData.category}
              onChange={(e) => handleNewsDataChange('category', e.target.value)}
            />
            <CKEditorComponent
              content={newsData.content}
              setContent={(value) => handleNewsDataChange('content', value)}
            />
            <DropAreaInput
              value={newsData.mainImage}
              onFilesUpdate={onMainFilesUpdate}
              maxFile={1}
              initialFiles={newsData.mainImage}
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

export default NewsEditPage;
