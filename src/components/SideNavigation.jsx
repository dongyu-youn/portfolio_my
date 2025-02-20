import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SideNavigation() {
  const [activeSection, setActiveSection] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
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
    { id: 2, label: 'Portfolio' },
    { id: 3, label: 'Solution' },
    { id: 4, label: 'representative work' },
    { id: 5, label: 'NewsLetter' },
    { id: 6, label: 'Services' },
  ];

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('section');
    const section = sections[index - 1];
    if (section) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const sectionRect = section.getBoundingClientRect().top;
      const sectionPosition = sectionRect - bodyRect;
      const offsetPosition = sectionPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(index);
    }
  };

  return (
    <div
      className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-50 font-sans hidden md:block ${
        location.pathname !== '/' ? 'hidden' : ''
      }`}
    >
      <div className="flex flex-col space-y-4">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative w-8 h-8 flex items-center justify-center transition-all duration-300 group`}
          >
            <img
              src="/images/seeds/seed.png"
              alt="seed"
              className={`absolute w-full h-full transition-all duration-300
                ${
                  activeSection === item.id
                    ? 'opacity-100'
                    : 'opacity-50 hover:opacity-75'
                }`}
            />
            <span className="relative z-10 text-sm font-medium text-gray-600">
              {item.id}
            </span>
            <span
              className={`absolute right-full mr-4 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm ${
                activeSection === 1
                  ? 'text-white opacity-100'
                  : 'text-gray-600 opacity-0'
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNavigation;
