import { act, render, screen, waitFor } from '@testing-library/react';
import BookingPage from './BookingPage';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { isValidElement } from 'react';
import { BookingForm } from './BookingForm';

function renderWithRouter(children, routes = []) {
  const options = isValidElement(children)
    ? { element: children, path: '/' }
    : children;

  const router = createMemoryRouter([{ ...options }, ...routes], {
    initialEntries: [options.path],
    initialIndex: 1,
  });

  return render(<RouterProvider router={router} />);
}

jest.mock('./BookingForm.jsx');
const mockFetch = jest.fn();

test('Handles fetch available times', async () => {
  renderWithRouter(<BookingPage />);

  // mockFetch.mockResolvedValue({
  //   json: () =>
  //     Promise.resolve({ availableTimes: ['15:00', '18:00', '22:00'] }),
  // });

  const selectDateElement = screen.queryByRole('');

  // expect(BookingForm).toHaveBeenCalledWith({
  //   availableTimes: ['15:00', '18:00', '22:00'],
  //   navigate: jest.fn(),
  //   updateTimes: jest.fn(),
  // });
});
