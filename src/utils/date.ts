import dayjs from 'dayjs';

export function formatDate(date: Date | string): string {
  return dayjs(date).format('YYYY년 MM월 DD일 HH:mm');
}
