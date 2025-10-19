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
        <div className="space-x-4">
          <a href="/MyPortfolio/박범민_이력서.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-black text-white rounded">📄 Resume</a>
          <a href="https://github.com/parkbeommin" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-black rounded">💼 GitHub</a>
        </div>
        
        {/* 개발 통계 - 하단에 배치 */}
        <div className="mt-8">
          <DevStats startDate={devStartDate} lastUpdate={lastUpdate} />
        </div>
    </section>
  );
};

export default Hero;