import { useState, useEffect } from 'react';
import { FaBlogger, FaInstagram } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className=" bg-brand-green text-white py-12 font-sans">
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <div className="flex flex-col items-center space-y-6">
          {/* 주소 */}

          {/* 연락처 정보 */}
          <p className="text-center text-base lg:text-lg font-medium">
            제휴 및 제작 문의 : 이메일{' '}
            <a href="mailto:kukuiju@naver.com" className="hover:underline">
              donghe1472@gmail.com
            </a>{' '}
            / 전화번호{' '}
            <a href="tel:031-639-6354" className="hover:underline">
              010-2491-0185
            </a>{' '}
          </p>

          {/* 저작권 */}
          <p className="text-center text-base lg:text-lg font-medium">
            Copyright © DONGYU
          </p>

          {/* 소셜 미디어 링크 */}
          <div className="flex space-x-4">
            <a
              href="https://blog.naver.com/kukuiju"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#03C75A] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
            >
              <FaBlogger size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#E4405F] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://notion.so"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#000000] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
            >
              <SiNotion size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
