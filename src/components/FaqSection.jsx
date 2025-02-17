import { useState, useEffect } from 'react';

function FaqSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs = [
    {
      question: '알림톡 여행은 어떤 서비스인가요?',
      answer: '알림톡 여행은 고내 이행과 추제, 체험행시 정보 알림서비스입니다.',
    },
    {
      question: '알림톡여행은 어떻게 운영되는가?',
      answer:
        '알림톡 여행은 고객의 여행 일정과 관련된 정보를 실시간으로 제공하며, 맞춤형 알림 서비스를 제공합니다.',
    },
    {
      question: '퀴즈는 무엇이고 그 진행은 어떻게 하나요?',
      answer:
        '퀴즈는 여행 관련 지식을 테스트하고 재미있게 학습할 수 있는 기능입니다. 정답을 맞추면 포인트도 획득할 수 있습니다.',
    },
    {
      question: '이용방법과 회원가입 방법',
      answer:
        '앱 스토어나 플레이 스토어에서 앱을 다운로드 받은 후, 간단한 회원가입 절차를 통해 서비스를 이용하실 수 있습니다.',
    },
  ];

  return (
    <section className="bg-white py-20 font-sans">
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* 왼쪽 이미지 */}
          <div className="lg:w-1/2">
            <img
              src="/images/alarm/image.png"
              alt="FAQ Illustration"
              className={`w-full max-w-md mx-auto transition-all duration-700 transform
                ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-10 opacity-0'
                }`}
            />
          </div>

          {/* 오른쪽 FAQ 리스트 */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#00939A]">
              인터코어의 알림톡여행이란 무엇인가?
            </h2>
            <h3 className="text-xl text-gray-600 mb-8">FAQ</h3>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 transform
                    ${
                      isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <button
                    className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{faq.question}</span>
                      <span className="transform transition-transform duration-200">
                        {openIndex === index ? '−' : '+'}
                      </span>
                    </div>
                    {openIndex === index && (
                      <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
