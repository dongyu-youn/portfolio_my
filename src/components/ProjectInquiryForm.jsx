import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from '@material-tailwind/react';
import { createContact } from '../api/contact';

function ProjectInquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    company: '',
    inquiryType: '직접상담',
    message: '',
    selectedTypes: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTypeSelect = (type) => {
    setFormData((prev) => {
      const types = prev.selectedTypes.includes(type)
        ? prev.selectedTypes.filter((t) => t !== type)
        : [...prev.selectedTypes, type];
      return { ...prev, selectedTypes: types };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createContact(formData);
      if (response.status === 200) {
        alert('상담 신청이 완료되었습니다.');
        window.history.back();
      }
    } catch (error) {
      console.error('상담 신청 중 오류가 발생했습니다:', error);
      alert('상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const consultationTypes = [
    '웹사이트 통합리뉴얼',
    '반응형 웹사이트',
    'PC 전용 웹사이트',
    '모바일 전용 웹사이트',
    '쇼핑몰',
    '웹표준 디자인',
    '마케팅 컨설팅',
    '온라인 광고',
    '기타',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-2xl mx-auto p-8 lg:mt-32 shadow-xl rounded-xl font-sans mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            color="blue-gray"
            className="text-center mb-6 text-3xl font-bold"
          >
            프로젝트 상담
          </Typography>
          <Typography color="gray" className="text-center mb-8 leading-relaxed">
            인터코어는 고객의 비즈니스 성장을 위한 최적의 파트너입니다. 혁신적인
            디자인과 안정적인 기술력을 바탕으로 고객의 니즈를 정확히 파악하여
            맞춤형 솔루션을 제공합니다. 축적된 노하우로 고객의 디지털 성공을
            함께 만들어가겠습니다.
          </Typography>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-semibold"
            >
              1. 희망 상담 분야(중복 선택 가능)
            </Typography>
            <div className="flex flex-wrap gap-3">
              {consultationTypes.map((type, index) => (
                <motion.button
                  key={type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                  type="button"
                  onClick={() => handleTypeSelect(type)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 
                    ${
                      formData.selectedTypes.includes(type)
                        ? 'bg-teal-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {type}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-semibold"
            >
              2. 고객정보 입력
            </Typography>
            <div className="grid grid-cols-1 gap-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이름
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border rounded-lg focus:border-teal-500 transition-colors"
                  containerProps={{
                    className: 'min-w-[100px]',
                  }}
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이메일
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border rounded-lg focus:border-teal-500 transition-colors"
                  containerProps={{
                    className: 'min-w-[100px]',
                  }}
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  연락처
                </label>
                <Input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="border rounded-lg focus:border-teal-500 transition-colors"
                  containerProps={{
                    className: 'min-w-[100px]',
                  }}
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  회사명
                </label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="border rounded-lg focus:border-teal-500 transition-colors"
                  containerProps={{
                    className: 'min-w-[100px]',
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-semibold"
            >
              상담내용
            </Typography>
            <Textarea
              name="message"
              label="상담 내용을 입력해주세요"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className="border-2 focus:border-teal-500 rounded-xl p-4"
            />
          </motion.div>

          <motion.div
            className="p-6 bg-gray-50 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-semibold mb-4"
            >
              개인정보 수집 및 이용에 대한 동의
            </Typography>
            <div className="text-sm space-y-3">
              <Typography className="font-medium">
                1. 수집하는 개인정보의 항목
              </Typography>
              <Typography color="gray" className="pl-4">
                - 필수항목: 이름, 휴대폰, 이메일, 회사명
              </Typography>
              <Typography className="font-medium">
                2. 개인정보의 수집 및 이용 목적
              </Typography>
              <Typography color="gray" className="pl-4">
                - 상담 및 견적을 위한 정보 수집
              </Typography>
              <Typography className="font-medium">
                3. 개인정보 보유 기간
              </Typography>
              <Typography color="gray" className="pl-4">
                - 상담 완료 후 즉시 파기
              </Typography>
            </div>
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({ ...prev, agreed: !prev.agreed }))
              }
              className={`mt-4 px-4 py-2 rounded-full text-sm transition-all duration-300 
                ${
                  formData.agreed
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
            >
              개인정보 수집 및 이용에 동의합니다
            </button>
          </motion.div>

          <div className="flex justify-center space-x-4 pt-4">
            <Button
              type="submit"
              className="bg-teal-500 px-8 py-3 rounded-full hover:bg-teal-600 transition-colors"
              onClick={handleSubmit}
            >
              신청하기
            </Button>
            <Button
              variant="outlined"
              className="px-8 py-3 rounded-full border-2 hover:bg-gray-100 transition-colors"
              onClick={() => window.history.back()}
            >
              취소
            </Button>
          </div>
        </motion.form>
      </Card>
    </motion.div>
  );
}

export default ProjectInquiryForm;
