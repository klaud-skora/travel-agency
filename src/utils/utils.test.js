import { formatTime } from './formatTime';
import { formatDays } from './formatDays';

describe('utils', () => {
  describe('formatTime', () => {

    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });
    it('should return null if arg is not a number', () => {
      expect(formatTime('abc')).toBe(null);
      expect(formatTime(() => {})).toBe(null);
    });
    it('should return null if arg is lower than zero', () => {
      expect(formatTime(-1)).toBe(null);
      expect(formatTime(-2)).toBe(null);
    });
    it('should return time in hh:mm:ss if arg is proper', () => {
      expect(formatTime(122)).toBe('00:02:02');
      expect(formatTime(3793)).toBe('01:03:13');
      expect(formatTime(120)).toBe('00:02:00');
      expect(formatTime(3604)).toBe('01:00:04');
    });
  });
  describe('formatDays', () => {
    it('should return null if there is no arg', () => {
      expect(formatDays()).toBe(null);
    });
    it('should return null if arg is not a number', () => {
      expect(formatDays('abc')).toBe(null);
      expect(formatDays(() => {})).toBe(null);
    });
    it('should return null if arg is lower than zero', () => {
      expect(formatDays(-1)).toBe(null);
      expect(formatDays(-2)).toBe(null);
    });
    it('should return days with correct description', () => {
      expect(formatDays(23)).toBe('23 days to summer!');
      expect(formatDays(1)).toBe('1 day to summer!');
    });
  });
});
