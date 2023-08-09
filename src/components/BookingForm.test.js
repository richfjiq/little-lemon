import { render, screen } from '@testing-library/react';
import { BookingForm } from './BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('Book Now');
  expect(headingElement).toBeInTheDocument();
});

test('Renders the option 17:00 in select time', () => {
  render(<BookingForm />);
  const selectTimeElement = screen.getByRole('combobox', {
    name: /choose time/i,
  });
  expect(selectTimeElement).toHaveTextContent('17:00');
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
