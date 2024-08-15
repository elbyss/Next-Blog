import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import ko from 'dayjs/locale/ko';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale(ko);
dayjs.tz.setDefault('Asia/Seoul');

export function formatDate(date: Date | string): string {
  return dayjs(date).tz().format('YYYY년 MM월 DD일');
}
