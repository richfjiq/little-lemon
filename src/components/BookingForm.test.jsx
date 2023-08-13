import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BookingForm } from './BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('Book Now');
  expect(headingElement).toBeInTheDocument();
});

test('Renders the number of guests input with max attribute', () => {
  render(<BookingForm />);
  const guestsInputElement = screen.getByRole('spinbutton', {
    name: /number of guests/i,
  });
  expect(guestsInputElement).toHaveAttribute('max');
});

test('Renders Anniversary option in occasion select', () => {
  render(<BookingForm />);
  const selectOccasionElement = screen.getByRole('combobox', {
    name: /occasion/i,
  });
  expect(selectOccasionElement).toHaveTextContent('Anniversary');
});

test('Renders date input, disabled select time input at first render', () => {
  render(<BookingForm />);
  const inputDate = screen.getByLabelText('Choose date');
  const selectTime = screen.getByLabelText('Choose time');
  userEvent.click(selectTime);
  expect(selectTime).toBeDisabled();
  userEvent.type(inputDate, '2023-08-15');
  expect(inputDate.value).toBe('2023-08-15');
  userEvent.click(selectTime);
});
