import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// D+ 계산 함수
export function calculateDaysSince(startDate: string): number {
  const start = new Date(startDate)
  const now = new Date()
  
  // 날짜만 비교하기 위해 시간을 00:00:00으로 설정
  start.setHours(0, 0, 0, 0)
  now.setHours(0, 0, 0, 0)
  
  const diffTime = now.getTime() - start.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
  return Math.max(0, diffDays) // 음수가 나오지 않도록 0 이상으로 제한
}

// 날짜 포맷팅 함수
export function formatDate(date: Date): string {
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// 상대적 시간 표시 함수
export function getRelativeTime(date: Date): string {
  const now = new Date()
  const diffTime = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) {
    return '오늘'
  } else if (diffDays === 1) {
    return '어제'
  } else if (diffDays < 7) {
    return `${diffDays}일 전`
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7)
    return `${weeks}주 전`
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    return `${months}개월 전`
  } else {
    const years = Math.floor(diffDays / 365)
    return `${years}년 전`
  }
}

// 년, 월, 일 계산 함수
export function getDetailedTime(startDate: string, endDate?: string) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();
  
  if (days < 0) {
    months--;
    days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
  }
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  return { years, months, days };
}