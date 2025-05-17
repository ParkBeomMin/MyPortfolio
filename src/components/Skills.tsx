import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills">
      <h3 className="text-2xl font-bold mb-4">Skills</h3>
      <div className="flex flex-wrap gap-2 text-sm">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-200 px-3 py-1 rounded">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;