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
          Accept: '*/*',
        },
        withCredentials: true,
      };

      const response = await axios.post(
        `${API_URL}/upload/image`,
        formData,
        config
      );

      const today = new Date();
      const dateFolder = today.toISOString().split('T')[0];

      const imageUrl = `${IMG_URL}/uploads/${dateFolder}/${response.data.url
        .split('/')
        .pop()}`;
      return imageUrl;
    } catch (error) {
      console.error('업로드 실패:', error);
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
      // 이미지 배열을 문자열로 변환하여 전송
      const newsDataToSend = {
        ...newsData,
        image: newsData.image.join('||'), // 구분자로 || 사용
      };

      console.log('전송되는 이미지 문자열:', newsDataToSend.image);

      const response = await createNews(newsDataToSend);

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
          console.log('새로 업로드할 파일들:', files);

          const uploadPromises = files.map((file) => handleImageUpload(file));
          const newUploadedUrls = await Promise.all(uploadPromises);

          // 기존 이미지 배열 정리
          let currentImages = newsData.image;
          if (typeof currentImages === 'string') {
            try {
              currentImages = JSON.parse(currentImages);
            } catch (e) {
              currentImages = [];
            }
          }
          if (!Array.isArray(currentImages)) {
            currentImages = currentImages ? [currentImages] : [];
          }

          // 새 이미지 추가
          const updatedImages = [...currentImages, ...newUploadedUrls];
          console.log('전체 이미지 배열:', updatedImages);

          handleNewsDataChange('image', updatedImages);
        }
      } catch (error) {
        console.error('이미지 업로드 실패:', error);
      }
    },
    [handleNewsDataChange, newsData.image]
  );

  const handleUpdate = async () => {
    if (!newsData.title || !newsData.content || !newsData.date) {
      alert('필수 필드를 모두 입력해주세요.');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('title', newsData.title);
      formData.append('content', newsData.content);
      formData.append('category', newsData.category);
      formData.append('date', newsData.date);

      // 이미지 배열 처리 및 유효성 검사
      let imageArray = [];
      if (Array.isArray(newsData.image)) {
        imageArray = newsData.image
          .map((img) => {
            if (typeof img === 'object') return img.src;
            if (typeof img === 'string') {
              return img; // URL 유효성 검사 제거
            }
            return null;
          })
          .filter(Boolean);
      }

      // 이미지 배열이 비어있는지 확인
      if (imageArray.length === 0) {
        alert('최소 1개 이상의 이미지가 필요합니다.');
        return;
      }

      // 이미지 배열을 JSON 문자열로 변환
      const imageJson = JSON.stringify(imageArray);

      // 이미지 JSON 문자열이 올바른 형식인지 확인
      try {
        JSON.parse(imageJson); // 파싱 테스트
      } catch (e) {
        console.error('이미지 JSON 형식이 올바르지 않습니다:', e);
        alert('이미지 처리 중 오류가 발생했습니다.');
        return;
      }

      formData.append('image', imageJson);
      console.log('전송할 이미지 배열:', imageArray);
      console.log('전송할 이미지 JSON:', imageJson);

      await updateNews(id, formData);
      alert('뉴스가 수정되었습니다.');
      navigate('/news');
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
            console.log('받아온 뉴스 데이터:', response);
            let image = response.image;
            try {
              if (typeof image === 'string') {
                image = JSON.parse(image);
              }
            } catch (e) {
              console.log('이미지 파싱 실패:', e);
              image = [response.image];
            }

            console.log('처리된 이미지:', image);

            setNewsData({
              id: response.id,
              title: response.title,
              content: response.content,
              image: image,
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
