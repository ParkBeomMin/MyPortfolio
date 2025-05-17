import { workExperience as workExperienceData } from '../data';
import { useMemo } from 'react';
const WorkExperience = () => {

    const workExperience = useMemo(() => {
        return workExperienceData.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()).map((experience) => ({
            ...experience,
            endDate: experience.endDate ? experience.endDate : '재직 중',
        }));
    }, []);

    const totalCareerYears = useMemo(() => {
        return workExperience.reduce((acc, experience) => {
            const startDate = new Date(experience.startDate);
            const endDate = experience.endDate && experience.endDate !== '재직 중' ? new Date(experience.endDate) : new Date();
            return acc + (endDate.getFullYear() - startDate.getFullYear());
        }, 0);
    }, [workExperience]);
    
  return (
    <section id="experience">
      <h3 className="text-2xl font-bold">Work Experience</h3>
      <p className="text-sm text-gray-500 mb-4">총 경력 {totalCareerYears}년</p>
      <div className="space-y-6">
        {workExperience.map((experience, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md">
            <h4 className="text-lg font-semibold">
                {experience?.logo && 
                <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer">
                    <img src={experience.logo} alt={experience.company} className="w-12 h-12 inline-block mr-2" />
                </a>
                }
                {experience.company} | {experience.department}
            </h4>
            <p className="text-sm text-gray-500">{experience.startDate} ~ {experience.endDate}</p>
            {experience?.skills && <div className="flex flex-wrap gap-2 mb-2 mt-2">
                {experience?.skills?.map((skill, index) => (
                    <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-sm">{skill}</span>
                ))}
            </div>}
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
                {experience.description.map((description, jndex) => (
                    <li key={`${index}-${jndex}`}>{description}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
