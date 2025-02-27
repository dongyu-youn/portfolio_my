import { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  Input,
  Textarea,
} from '@material-tailwind/react';
import { getRecruitById, createRecruit, updateRecruit } from '@/api/recruit';
import DropAreaInput from '@/component/DropAreaInput';

const initialRecruitData = {
  id: 0,
  title: '',
  content: '',
  mainImage: [],
  position: '',
  requirements: '',
  deadline: '',
  category: '', // category 추가
};

const RecruitEditPage = () => {
  const [recruitData, setRecruitData] = useState(initialRecruitData);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (
      !recruitData.title ||
      !recruitData.content ||
      !recruitData.position ||
      !recruitData.deadline ||
      !recruitData.category // category 필수값 체크 추가
    ) {
      alert('필수 필드를 모두 입력해주세요.');
      return;
    }
    try {
      await createRecruit(recruitData);
      alert('채용공고가 생성되었습니다.');
      navigate('/recruit');
    } catch (error) {
      console.error('Failed to create recruit:', error);
      alert('채용공고 생성에 실패했습니다.');
    }
  };

  const handleUpdate = async () => {
    if (
      !recruitData.title ||
      !recruitData.content ||
      !recruitData.position ||
      !recruitData.deadline ||
      !recruitData.category // category 필수값 체크 추가
    ) {
      alert('필수 필드를 모두 입력해주세요.');
      return;
    }
    try {
      const response = await updateRecruit({ ...recruitData, id });
      if (response.status === 200) {
        alert('채용공고가 수정되었습니다.');
        navigate('/recruit');
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Failed to update recruit:', error);
      alert('채용공고 수정에 실패했습니다.');
    }
  };

  const handleCancel = () => {
    if (confirm('작성을 취소하시겠습니까?')) {
      navigate(-1);
    }
  };

  const handleRecruitDataChange = useCallback((key, value) => {
    setRecruitData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const onMainFilesUpdate = useCallback(
    (files) => {
      const current = recruitData.mainImage;
      const isEqual =
        files.length === current.length &&
        files.every((file, idx) => file === current[idx]);

      if (!isEqual) {
        handleRecruitDataChange('mainImage', files);
      }
    },
    [recruitData.mainImage, handleRecruitDataChange]
  );

  useEffect(() => {
    const loadData = async () => {
      if (id) {
        try {
          const response = await getRecruitById(id);
          if (response) {
            const parsedMainImage = response.mainImage
              ? JSON.parse(response.mainImage)
              : [];

            setRecruitData({
              id: response.id,
              title: response.title,
              content: response.content,
              mainImage: parsedMainImage,
              position: response.position,
              requirements: response.requirements,
              deadline: response.deadline,
              category: response.category, // category 추가
            });
          }
        } catch (error) {
          console.error('Failed to load recruit:', error);
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
              value={recruitData.title}
              onChange={(e) => handleRecruitDataChange('title', e.target.value)}
            />
            <Input
              className="mb-6"
              size="lg"
              placeholder="카테고리를 입력해 주세요"
              label="카테고리"
              value={recruitData.category}
              onChange={(e) =>
                handleRecruitDataChange('category', e.target.value)
              }
            />
            <Input
              className="mb-6"
              size="lg"
              placeholder="채용 포지션을 입력해 주세요"
              label="채용 포지션"
              value={recruitData.position}
              onChange={(e) =>
                handleRecruitDataChange('position', e.target.value)
              }
            />
            <Input
              className="mb-6"
              size="lg"
              type="date"
              label="마감일"
              value={recruitData.deadline}
              onChange={(e) =>
                handleRecruitDataChange('deadline', e.target.value)
              }
            />
            <Textarea
              className="mb-6"
              size="lg"
              placeholder="내용을 입력해 주세요"
              label="내용"
              rows={10}
              value={recruitData.content}
              onChange={(e) =>
                handleRecruitDataChange('content', e.target.value)
              }
            />
            <DropAreaInput
              value={recruitData.mainImage}
              onFilesUpdate={onMainFilesUpdate}
              maxFile={1}
              initialFiles={recruitData.mainImage}
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
                  onClick={handleCreate}
                  className="bg-[#00939A]"
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

export default RecruitEditPage;
