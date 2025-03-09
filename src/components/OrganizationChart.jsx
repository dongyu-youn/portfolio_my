import React from 'react';

function OrganizationChart() {
  return (
    <div className="hidden lg:block">
      <div className="relative flex flex-col items-center mt-12">
        {/* 총회 */}
        <div className="relative flex flex-col items-center">
          <div className="w-24 h-24 bg-[#198a21] rounded-full flex items-center justify-center">
            <div className="text-white text-2xl font-extrabold font-notoSans">
              총회
            </div>
          </div>

          <div className="h-[80px] w-[2px] bg-[#98c174] "></div>

          <div className="flex flex-row items-center justify-start mt-4 absolute top-[110%]">
            <div className="absolute w-[150px] h-[2px] bg-[#98c174] top-[1.4rem] left-72 "></div>
            <div className="flex flex-col items-center z-10 ml-[400px]">
              <div className="w-44 h-11 bg-[#04a00f] rounded-lg flex items-center justify-center">
                <div className="text-white text-2xl font-medium font-notoSans">
                  감사
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 협회장 */}
        <div className="relative flex flex-col items-center ">
          <div className="w-24 h-24 bg-[#198a21] rounded-full flex items-center justify-center z-20">
            <div className="text-white text-2xl font-extrabold font-notoSans">
              협회장
            </div>
          </div>

          <div className="flex flex-row items-center justify-start mt-4 relative">
            <div className="absolute w-[150px] h-[2px] bg-[#98c174] top-[1.4rem] right-72"></div>
            <div className="flex flex-col items-center z-10 mr-[400px]">
              <div className="w-44 h-11 bg-[#04a00f] rounded-lg flex items-center justify-center">
                <div className="text-white text-2xl font-medium font-notoSans">
                  임원위원회
                </div>
              </div>
            </div>
          </div>
          <div className="h-[200px] w-[2px] bg-[#98c174] absolute bottom-0"></div>
        </div>

        {/* 사무처 */}
        <div className="relative flex flex-col items-center">
          <div className="w-44 h-11 bg-[#017f5b] rounded-lg flex items-center justify-center">
            <div className="text-white text-2xl font-medium font-notoSans">
              사무처
            </div>
          </div>
          <div className="h-[70px] w-[2px] bg-[#98c174] -mb-1"></div>
        </div>

        {/* 하위 지부 */}
        <div className="relative flex justify-between w-full max-w-[900px] mt-4">
          {/* 연결선 */}
          <div className="absolute w-[calc(100%-176px)] h-[2px] bg-[#98c174] top-[1.4rem] left-[88px] "></div>
          <div className="absolute w-[calc(100%-176px)] h-[2px] bg-[#98c174] top-[-1.4rem] left-[88px]"></div>

          {[
            '남구지부',
            '동구지부',
            '주간이용시설',
            '병원이송센터',
            '희망지원센터',
          ].map((name, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <div className="h-[20px] w-[2px] bg-[#98c174] absolute -top-[20px]"></div>
              <div className="w-44 h-11 bg-[#a2d2a5] rounded-lg flex items-center justify-center">
                <div className="text-black text-xl font-medium font-notoSans">
                  {name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrganizationChart;
