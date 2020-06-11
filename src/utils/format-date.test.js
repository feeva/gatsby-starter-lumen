// @flow strict
import formatDate from './format-date';

test('formatDate', () => {
  expect(formatDate('2020-06-08')).toBe('Jun 8, 2020');
});
