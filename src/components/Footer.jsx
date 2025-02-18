import { useState, useEffect } from 'react';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className=" bg-[#B39B8E] text-white py-12 font-sans">
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <div className="flex flex-col items-center space-y-6">
          {/* 주소 */}
          <p className="text-center text-base lg:text-lg font-medium">
            경기도 성남시 중원구 갈마치로 314, 센트럴비즈타워 1차 1128호
            인터코어
          </p>

          {/* 연락처 정보 */}
          <p className="text-center text-base lg:text-lg font-medium">
            제휴 및 제작 문의 : 이메일{' '}
            <a href="mailto:kukuiju@naver.com" className="hover:underline">
              kukuiju@naver.com
            </a>{' '}
            /전화번호{' '}
            <a href="tel:031-639-6354" className="hover:underline">
              031-639-6354
            </a>{' '}
            /{' '}
            <a href="tel:010-4089-7177" className="hover:underline">
              010-4089-7177
            </a>
          </p>

          {/* 저작권 */}
          <p className="text-center text-base lg:text-lg font-medium">
            Copyright © INTER CORE.
          </p>

          {/* 블로그 링크 */}
          <a
            href="https://blog.naver.com/kukuiju"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#03C75A] text-white px-6 py-2 rounded-full text-base hover:bg-opacity-90 transition-colors font-medium"
          >
            blog
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
