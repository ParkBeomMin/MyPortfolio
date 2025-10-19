import { hero, workExperience } from '../data';
import banner from '../assets/banner.jpg';
import DevStats from './DevStats';

const Hero = () => {
  // 개발 시작일 - 첫 번째 경력의 시작일
  const devStartDate = workExperience[0].startDate;
  
  // 포트폴리오 마지막 업데이트일
  const lastUpdate = '2025-10-20';
  
  return (
    <section className="text-center mt-10">
        <h2 className="text-3xl font-bold mb-2">Hi, I'm Beommin 👋</h2>
        
        <img src={banner} alt="banner" className="w-full h-72 object-cover mb-4" />
        <p className="text-lg mb-4" dangerouslySetInnerHTML={{ __html: hero }} />
        <div className="flex justify-center gap-4">
          <a href="/MyPortfolio/박범민_이력서.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
            📄 Resume
          </a>
          <a href="https://github.com/parkbeommin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-black rounded hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
        
        {/* 개발 통계 - 하단에 배치 */}
        <div className="mt-8">
          <DevStats startDate={devStartDate} lastUpdate={lastUpdate} />
        </div>
    </section>
  );
};

export default Hero;