import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllContacts } from '../api/contact';

function InquiryList() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const adminToken = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!adminToken) {
      navigate('/');
      return;
    }

    const fetchInquiries = async () => {
      try {
        const response = await getAllContacts();
        // 데이터가 배열인지 확인하고 처리
        const inquiriesData = Array.isArray(response)
          ? response
          : response.data
          ? response.data
          : [];
        setInquiries(inquiriesData);
        setLoading(false);
      } catch (error) {
        console.error('문의 목록을 불러오는데 실패했습니다:', error);
        setLoading(false);
        // 에러 시 빈 배열로 설정
        setInquiries([]);
      }
    };

    fetchInquiries();
  }, [adminToken, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        로딩중...
      </div>
    );
  }

  // 데이터가 없을 때 처리
  if (!inquiries.length) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">프로젝트 문의 목록</h1>
        <p className="text-gray-600">문의 내역이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 lg:mt-40 lg:max-w-lg 2xl:max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">프로젝트 문의 목록</h1>
      <div className="grid gap-6">
        {inquiries.map((inquiry) => (
          <div
            key={inquiry.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  {inquiry.company}
                </h2>
                <p className="text-gray-600 mb-2">담당자: {inquiry.name}</p>
                <p className="text-gray-600 mb-2">이메일: {inquiry.email}</p>
                <p className="text-gray-600 mb-2">연락처: {inquiry.contact}</p>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(inquiry.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">프로젝트 내용:</h3>
              <p className="text-gray-700 whitespace-pre-wrap">
                {inquiry.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InquiryList;
