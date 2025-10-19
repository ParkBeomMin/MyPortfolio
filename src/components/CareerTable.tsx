import { workExperience as workExperienceData, Project } from '../data';
import { useMemo } from 'react';

const CareerTable = () => {
  const workExperience = useMemo(() => {
    return workExperienceData.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()).map((experience) => ({
      ...experience,
      endDate: experience.endDate ? experience.endDate : '재직 중',
    }));
  }, []);

  return (
    <div className="mt-8">
      <h4 className="text-xl font-bold mb-4">경력기술서</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 group">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center font-semibold">회사명</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center font-semibold">역할</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center font-semibold">프로젝트 기간</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center font-semibold">프로젝트</th>
            </tr>
          </thead>
          <tbody>
            {workExperience.map((experience, index) => {
              // 프로젝트가 있으면 프로젝트별로, 없으면 빈 프로젝트 배열로 처리
              const projects = experience.project && experience.project.length > 0 
                ? experience.project 
                : [{ title: '', role: '', date: '', description: '', result: '', skills:[],  link: '' }];
              
              return projects.map((project, pIdx) => (
                <tr 
                  key={`${index}-${pIdx}`} 
                  className={`project-${index}-${pIdx} hover:bg-gray-50 dark:hover:bg-gray-800`}
                  onMouseEnter={() => {
                    // 현재 프로젝트 행과 회사명 셀에만 hover 효과 적용
                    const currentRow = document.querySelector(`.project-${index}-${pIdx}`);
                    const companyCell = document.querySelector(`.company-${index}`);
                    if (currentRow) currentRow.classList.add('bg-gray-50', 'dark:bg-gray-800');
                    if (companyCell) companyCell.classList.add('bg-gray-50', 'dark:bg-gray-800');
                  }}
                  onMouseLeave={() => {
                    // hover 효과 제거
                    const currentRow = document.querySelector(`.project-${index}-${pIdx}`);
                    const companyCell = document.querySelector(`.company-${index}`);
                    if (currentRow) currentRow.classList.remove('bg-gray-50', 'dark:bg-gray-800');
                    if (companyCell) companyCell.classList.remove('bg-gray-50', 'dark:bg-gray-800');
                  }}
                >
                  {/* 회사명 - 첫 번째 프로젝트에서만 표시하고 rowspan 적용 */}
                  {pIdx === 0 && (
                    <td 
                      rowSpan={projects.length} 
                      className={`company-${index} border border-gray-300 dark:border-gray-600 px-4 py-2 text-center align-middle`}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span 
                          className="text-gray-900 dark:text-white font-medium"
                        >
                          {experience.company}
                        </span>
                      </div>
                    </td>
                  )}
                  
                  {/* 역할 - 각 프로젝트별로 표시 */}
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center align-middle">
                    <div className="font-medium">{project.role}</div>
                  </td>
                  
                  {/* 프로젝트 기간 */}
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center align-middle">
                    <div className="text-sm">
                      <div className="font-medium">
                        {project.date || `${experience.startDate} ~ ${experience.endDate || '재직 중'}`}
                      </div>
                    </div>
                  </td>
                  
                  {/* 프로젝트 정보 */}
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    {project.title ? (
                      <div className="space-y-3">
                        {/* 프로젝트 정보 */}
                        <div className="p-3">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold text-gray-900 dark:text-white text-sm">
                              {project.title}
                            </h5>
                            <div className="flex space-x-2">
                              {project.link && (
                                <a 
                                  href={project.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-600 dark:text-blue-400 hover:underline text-xs"
                                >
                                  🔗 사이트
                                </a>
                              )}
                              {/* {project.github && (
                                <a 
                                  href={project.github} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-gray-600 dark:text-gray-400 hover:underline text-xs"
                                >
                                  📁 GitHub
                                </a>
                              )} */}
                            </div>
                          </div>
                          <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            - 기술 스택<br/>{project.skills.join(', ')}
                          </div>
                          <br/>
                          <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            - 주요 업무{project.description}
                          </div>
                          <br/>
                          {(project as Project).result && <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            - 주요 성과{(project as Project).result}
                          </div>}
                        </div>
                      </div>
                    ) : (
                      <ul className="text-sm space-y-1">
                        {experience.description.map((desc, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-gray-400 mr-2">•</span>
                            <span>- 주요 업무<br/>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </td>
                  
                </tr>
              ));
            })}
          </tbody>
        </table>
      </div>
      
      {/* PDF 다운로드 링크 */}
      {/* <div className="mt-4 text-center">
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>경력기술서 PDF 다운로드</span>
        </a>
      </div> */}
    </div>
  );
};

export default CareerTable;
