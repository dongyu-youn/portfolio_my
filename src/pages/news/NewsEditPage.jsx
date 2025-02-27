import { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  Input,
  Textarea,
} from '@material-tailwind/react';
import { getNewsById, createNews, updateNews } from '@/api/news';
import DropAreaInput from '@/component/DropAreaInput';

const initialNewsData = {
  id: 0,
  title: '',
  content: '',
  mainImage: [],
  category: '',
  date: '', // date 필드 추가
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
      newsData.mainImage.length === 0 ||
      !newsData.date
    ) {
      alert('필수 필드를 모두 입력해주세요.');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('title', newsData.title);
      formData.append('content', newsData.content);
      formData.append('category', newsData.category);
      formData.append('date', newsData.date);
      formData.append('mainImage', newsData.mainImage[0]);

      const response = await createNews(formData);
      alert('뉴스가 생성되었습니다.');
      navigate('/news');
    } catch (error) {
      console.error('Failed to create news:', error);
      alert('뉴스 생성에 실패했습니다.');
    }
  };

  const handleUpdate = async () => {
    if (
      !newsData.title ||
      !newsData.content ||
      newsData.mainImage.length === 0 ||
      !newsData.date // date 필수값 체크 추가
    ) {
      alert('필수 필드를 모두 입력해주세요.');
      return;
    }
    try {
      const response = await updateNews({ ...newsData, id });
      if (response.status === 200) {
        alert('뉴스가 수정되었습니다.');
        navigate('/news');
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
      console.log('새로운 파일 업데이트:', files);
      // 파일이 있을 때만 업데이트
      if (files && files.length > 0) {
        handleNewsDataChange('mainImage', files);
      }
    },
    [handleNewsDataChange]
  );

  useEffect(() => {
    const loadData = async () => {
      if (id) {
        try {
          const response = await getNewsById(id);
          if (response) {
            console.log('받아온 뉴스 데이터:', response);
            // mainImage가 문자열이면 파싱, 아니면 그대로 사용
            let mainImage = response.mainImage;
            try {
              if (typeof mainImage === 'string') {
                mainImage = JSON.parse(mainImage);
              }
            } catch (e) {
              console.log('이미지 파싱 실패:', e);
              mainImage = [response.mainImage]; // 문자열이면 배열로 변환
            }

            console.log('처리된 이미지:', mainImage);

            setNewsData({
              id: response.id,
              title: response.title,
              content: response.content,
              mainImage: mainImage,
              category: response.category || '',
              date: response.date || '', // date 필드 추가
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
            <Input
              className="mb-6"
              type="date"
              size="lg"
              label="날짜"
              value={newsData.date}
              onChange={(e) => handleNewsDataChange('date', e.target.value)}
            />
            <Textarea
              className="mb-6"
              size="lg"
              placeholder="내용을 입력해 주세요"
              label="내용"
              rows={10}
              value={newsData.content}
              onChange={(e) => handleNewsDataChange('content', e.target.value)}
            />
            <DropAreaInput
              value={newsData.mainImage}
              onFilesUpdate={onMainFilesUpdate}
              maxFile={1}
              initialFiles={newsData.mainImage}
              description="권장 이미지 크기: 367 x 450px"
            />
            <div className="flex justify-end gap-2 pt-4">
              <Button onClick={handleCancel} color="red">
                취소
              </Button>
              {location.pathname.includes('edit') ? (
                <Button
                  onClick={handleUpdate}
                  className="bg-[#00939A]"
                  color="blue"
                >
                  수정
                </Button>
              ) : (
                <Button
                  className="bg-[#00939A]"
                  onClick={handleCreate}
                  color="green"
                >
                  생성
                </Button>
              )}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default NewsEditPage;
