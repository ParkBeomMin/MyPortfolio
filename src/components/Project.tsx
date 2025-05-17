import { projects } from '../data';

const Project = () => {
  return (
    <section id="projects">
        <h3 className="text-2xl font-bold mb-4">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
            <div key={index} className="border rounded p-4 shadow">
                <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                    {project.skills.map((skill, index) => (
                        <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-sm">{skill}</span>
                    ))}
                </div>
                <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm">🔗 GitHub</a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm ml-2">🔗 배포 링크</a>
            </div>
        ))}
        </div>
    </section>
  );
};

export default Project;