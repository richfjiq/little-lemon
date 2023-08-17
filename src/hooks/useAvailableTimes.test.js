import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import useAvailableTimes from './useAvailableTimes';

test('should render initial times as empty array', () => {
  const { result } = renderHook(useAvailableTimes);

  expect(result.current.availableTimes).toEqual([]);
});

test('should initialize times after fetching api', () => {
  const { result } = renderHook(useAvailableTimes);

  act(() => {
    result.current.initializeTimes(['14:00', '17:00', '20:00']);
  });

  expect(result.current.availableTimes).toEqual(['14:00', '17:00', '20:00']);
});

test('should render initial date as empty string', () => {
  const { result } = renderHook(useAvailableTimes);

  expect(result.current.date).toEqual('');
});

test('should render the date select by the user', () => {
  const { result } = renderHook(useAvailableTimes);

  act(() => {
    result.current.updateTimes('2023-08-23');
  });

  expect(result.current.date).toEqual('2023-08-23');
});
