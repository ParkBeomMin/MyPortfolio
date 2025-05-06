import { about } from '../data';

const About = () => {
  return (
    <section id="about">
    <h3 className="text-2xl font-bold mb-4">About Me</h3>
    <p dangerouslySetInnerHTML={{ __html: about }} />
  </section>
  );
};

export default About;