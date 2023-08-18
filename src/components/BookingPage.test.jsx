import { isValidElement } from 'react';
import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { BookingForm } from './BookingForm';
import BookingPage from './BookingPage';

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

test('Handles fetch available times', async () => {
  renderWithRouter(<BookingPage />);

  expect(BookingForm.mock.calls).toHaveLength(1);
  expect(BookingForm).toHaveBeenCalled();
  expect(BookingForm).toHaveBeenCalledWith(
    expect.objectContaining({
      availableTimes: [],
    }),
    expect.anything()
  );
});
