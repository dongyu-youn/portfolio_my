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
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const IMG_URL = import.meta.env.VITE_IMG_URL;

const initialNewsData = {
  id: 0,
  title: '',
  content: '',
  image: [],
  category: '',
  date: '',
};

const NewsEditPage = () => {
  const [newsData, setNewsData] = useState(initialNewsData);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleImageUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: '*/*',
        },
        withCredentials: true,
      };

      console.log('업로드하는 파일:', file.name, file.type, file.size);

      const response = await axios.post(
        `${API_URL}/upload/image`,
        formData,
        config
      );

      console.log('서버 응답:', response.data);

      if (!response.data || !response.data.url) {
        throw new Error('서버 응답에 이미지 URL이 없습니다.');
      }

      // 현재 날짜 생성
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      const dateStr = `${year}-${month}-${day}`;

      // API_URL에서 기본 도메인 추출 (http://localhost:8080)
      const baseUrl = API_URL.split('/api')[0];

      // 서버 응답에서 파일명만 추출
      const fileName = response.data.url.split('/').pop();

      // 새로운 URL 구성
      const fullImageUrl = `${baseUrl}/uploads/${dateStr}/${fileName}`;

      console.log('생성된 URL:', fullImageUrl);

      return fullImageUrl;
    } catch (error) {
      console.error('업로드 실패 상세:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      throw error;
    }
  };

  const handleCreate = async () => {
    if (
      !newsData.title ||
      !newsData.content ||
      newsData.image.length === 0 ||
      !newsData.date
    ) {
      alert('필수 필드를 모두 입력해주세요.');
      return;
    }

    try {
      const newsDataToSend = {
        ...newsData,
        image: newsData.image.join('||'),
      };

      const response = await createNews(newsDataToSend);

      if (response) {
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

  const handleCancel = () => {
    if (confirm('작성을 취소하시겠습니까?')) {
      navigate(-1);
    }
  };

  const handleNewsDataChange = useCallback((key, value) => {
    setNewsData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const onMainFilesUpdate = useCallback(
    async (files) => {
      try {
        if (files && files.length > 0) {
          // File 객체만 업로드 처리
          const filesToUpload = files.filter((file) => file instanceof File);

          // 기존 이미지 URL 유지
          const existingUrls = newsData.image || [];

          const uploadPromises = filesToUpload.map((file) =>
            handleImageUpload(file)
          );
          const newUploadedUrls = await Promise.all(uploadPromises);

          // 기존 URL에 새로운 URL 추가
          const updatedImages = [...existingUrls, ...newUploadedUrls];

          handleNewsDataChange('image', updatedImages);
        }
      } catch (error) {
        console.error('이미지 업로드 실패:', error);
        alert('이미지 업로드에 실패했습니다. 다시 시도해주세요.');
      }
    },
    [handleNewsDataChange, newsData.image] // newsData.image 의존성 추가
  );
  const handleUpdate = async () => {
    if (!newsData.title || !newsData.content || !newsData.date) {
      alert('필수 필드를 모두 입력해주세요.');
      return;
    }
    try {
      if (newsData.image.length === 0) {
        alert('최소 1개 이상의 이미지가 필요합니다.');
        return;
      }

      const newsDataToSend = {
        ...newsData,
        image: newsData.image.join('||'),
      };

      const response = await updateNews(id, newsDataToSend);

      if (response) {
        alert('뉴스가 수정되었습니다.');
        navigate('/news');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('뉴스 수정 실패:', error);
      alert('뉴스 수정에 실패했습니다.');
    }
  };

  useEffect(() => {
    const loadData = async () => {
      if (id) {
        try {
          const response = await getNewsById(id);
          if (response) {
            const imageUrls = response.image
              ? response.image.split('||').filter((url) => url.trim())
              : [];

            setNewsData({
              id: response.id,
              title: response.title,
              content: response.content,
              image: imageUrls,
              category: response.category || '',
              date: response.date || '',
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
              value={newsData.image}
              onFilesUpdate={onMainFilesUpdate}
              maxFile={5}
              initialFiles={newsData.image}
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
