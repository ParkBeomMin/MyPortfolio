import { useState, useEffect } from 'react';
import { calculateDaysSince, formatDate, getTotalCareer } from '../lib/utils';
import { workExperience } from '../data';

interface DevStatsProps {
  startDate: string;
  lastUpdate: string;
}

const DevStats = ({ lastUpdate }: DevStatsProps) => {
  const [daysSinceUpdate, setDaysSinceUpdate] = useState(0);

  useEffect(() => {
    // 초기 계산
    setDaysSinceUpdate(calculateDaysSince(lastUpdate));
  }, [lastUpdate]);

  const detailedTime = getTotalCareer(workExperience.map((experience) => ({
    ...experience,
    endDate: experience.endDate ? experience.endDate : '재직 중',
  })));

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-center items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center space-x-2">
          <span className="font-medium">총 경력</span>
          <span className="text-blue-600 dark:text-blue-400 font-bold">
            {detailedTime.years}년 {detailedTime.months}개월
          </span>
        </div>
        
        <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
        
        <div className="flex items-center space-x-2">
          <span className="font-medium">마지막 업데이트</span>
          <span className="text-green-600 dark:text-green-400 font-bold">
          {formatDate(new Date(lastUpdate))} (D+{daysSinceUpdate})
          </span>
        </div>
      </div>
    </div>
  );
};

export default DevStats;
