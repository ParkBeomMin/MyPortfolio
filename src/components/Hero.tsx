import { hero } from '../data';
import banner from '../assets/banner.jpg';
const Hero = () => {
  return (
    <section className="text-center mt-10">
        <h2 className="text-3xl font-bold mb-2">Hi, I'm Beommin 👋</h2>
        <img src={banner} alt="banner" className="w-full h-72 object-cover mb-4" />
        <p className="text-lg mb-4" dangerouslySetInnerHTML={{ __html: hero }} />
        <div className="space-x-4">
        <a href="/resume.pdf" className="px-4 py-2 bg-black text-white rounded">📄 Resume</a>
        <a href="https://github.com/parkbeommin" className="px-4 py-2 border border-black rounded">💼 GitHub</a>
        </div>
    </section>
  );
};

export default Hero;