import { workExperience as workExperienceData } from '../data';
import { useMemo, useCallback } from 'react';
import CareerTable from './CareerTable';
import { getTotalCareer, getDetailedTime } from '../lib/utils';
const WorkExperience = () => {

    const workExperience = useMemo(() => {
        return workExperienceData.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()).map((experience) => ({
            ...experience,
            endDate: experience.endDate ? experience.endDate : '재직 중',
        }));
    }, []);

    const totalCareer = useMemo(() => {
        if (workExperience.length === 0) return { years: 0, months: 0, days: 0 };
        
            // 첫 번째 경력 시작일부터 현재까지의 총 경력 계산
        return getTotalCareer(workExperience);
    }, [workExperience]);

    const getCareerTime = useCallback((startDate: string, endDate: string) => {
      const time = getDetailedTime(startDate, endDate);
      return `${time.years}년 ${time.months}개월`;
    }, []);
    
  return (
    <section id="work-experience">
      <div className="mb-4">
        <h3 className="text-2xl font-bold">Work Experience</h3>
        <p className="text-sm text-gray-500">총 경력 {totalCareer.years}년 {totalCareer.months}개월</p>
      </div>
      <div className="space-y-6">
        {workExperience.map((experience, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md">
            <h4 className="text-lg font-semibold">
                {experience?.logo && 
                <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer">
                    <img src={experience.logo} alt={experience.company} className="w-12 inline-block mr-2" />
                </a>
                }
                {experience.company} | {experience.department}
            </h4>
            <p className="text-sm text-gray-500">{experience.startDate} ~ {experience.endDate} ({getCareerTime(experience.startDate, experience?.endDate)})</p>
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

      {/* 경력기술서 표 */}
      <CareerTable />

    </section>
  );
};

export default WorkExperience;
