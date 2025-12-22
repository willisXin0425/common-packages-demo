import { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

type CountType = {
  state: 'progress' | 'done';
  count: { days: number | string; hours: number | string; minutes: number | string; seconds: number | string };
};

const initCount: CountType = {
  state: 'done',
  count: {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
};

/**
 * 將 CountType 物件中的天、時、分、秒補零後轉成字串（2 位數）。
 *
 * @param {CountType} time - 包含倒數天數、時數、分鐘與秒數的物件。
 * @returns {CountType} 回傳一個新的 CountType 物件，`count` 屬性中的 days、hours、minutes、seconds
 *                      都會是字串形式（補零到 2 位數）。
 *
 * @example
 * const input = {
 *   state: 'progress',
 *   count: { days: 3, hours: 7, minutes: 5, seconds: 9 }
 * };
 * const result = convertTime(input);
 * result => {
 *   state: 'progress',
 *   count: { days: "03", hours: "07", minutes: "05", seconds: "09" }
 * }
 */
function convertTime(time: CountType): CountType {
  const d = String(time.count.days).padStart(2, '00');
  const h = String(time.count.hours).padStart(2, '00');
  const m = String(time.count.minutes).padStart(2, '00');
  const s = String(time.count.seconds).padStart(2, '00');
  return {
    ...time,
    count: {
      days: d,
      hours: h,
      minutes: m,
      seconds: s,
    },
  };
}

/**
 * 計算倒數時間。
 *
 * @param {string} countTime - 要計算倒數的時間。
 * @param {string} format - 計算結果的格式。
 * @returns {CountType} 回傳一個 CountType 物件或字串。
 *
 * @example
 * 如果當前時間為 2025-9-26 16:30:00
 *
 * const result = CountDown('2025-9-26 16:00:00');
 * result => {
 *   state: 'progress',
 *   count: { days: 0, hours: 0, minutes: 30, seconds: 0 }
 * }
 *
 * const result = CountDown('2025-9-26 15:30:00');
 * result => {
 *   state: 'done',
 *   count: { days: 0, hours: 0, minutes: 0, seconds: 0 }
 * }
 */
function CountDown(countTime: string, format?: 'string' | 'number'): CountType {
  const [counter, setCounter] = useState(initCount);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    const endTime = dayjs(countTime);
    const handleCount = () => {
      const nowTime = dayjs();
      if (nowTime.isAfter(endTime)) {
        clearInterval(intervalRef.current);
        setCounter(initCount);
      } else {
        const duration = endTime.diff(nowTime, 'seconds');
        const dur = dayjs.duration(duration, 'seconds');
        setCounter({
          state: 'progress',
          count: {
            days: Math.floor(dur.asDays()),
            hours: dur.hours(),
            minutes: dur.minutes(),
            seconds: dur.seconds(),
          },
        });
      }
    };
    handleCount();
    intervalRef.current = setInterval(() => {
      handleCount();
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [countTime]);

  return format === 'string' ? convertTime(counter) : counter;
}

export default CountDown;
