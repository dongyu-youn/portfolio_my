import { useState, useEffect } from 'react';

function SideNavigation() {
  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // 상단 20%, 하단 70% 영역을 제외하고 중앙 10% 영역만 관찰
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target) + 1;
          setActiveSection(index);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navigationItems = [
    { id: 1, label: 'Main' },
    { id: 2, label: 'About' },
    { id: 3, label: 'Project' },
    { id: 4, label: 'FAQ' },
    { id: 5, label: 'Portfolio' },
    { id: 6, label: 'Services' },
  ];

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('section');
    const section = sections[index - 1];
    if (section) {
      const offset = 100; // 상단 여백
      const bodyRect = document.body.getBoundingClientRect().top;
      const sectionRect = section.getBoundingClientRect().top;
      const sectionPosition = sectionRect - bodyRect;
      const offsetPosition = sectionPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group
              ${
                activeSection === item.id
                  ? 'bg-[#00939A] text-white'
                  : 'bg-white text-gray-400 hover:bg-gray-100'
              }`}
          >
            <span className="text-sm">{item.id}</span>
            <span className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm text-gray-600">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNavigation;
