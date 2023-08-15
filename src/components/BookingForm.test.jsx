import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BookingForm } from './BookingForm';

describe('Booking from component', () => {
  it('Should render basic fields', () => {
    render(
      <BookingForm
        updateTimes={jest.fn()}
        availableTimes={[]}
        navigation={jest.fn()}
      />
    );

    const headingElement = screen.getByText('Book Now');
    const dateElement = screen.getByTestId('date');
    const timeElement = screen.getByRole('combobox', { name: /choose time/i });
    const guestsElement = screen.getByRole('spinbutton');
    const occasionElement = screen.getByRole('combobox', { name: /occasion/i });

    expect(headingElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
    expect(guestsElement).toBeInTheDocument();
    expect(occasionElement).toBeInTheDocument();
  });

  it('Should show error message when fields are not entered', async () => {
    render(
      <BookingForm
        updateTimes={jest.fn()}
        availableTimes={[]}
        navigation={jest.fn()}
      />
    );

    const buttonElement = screen.getByRole('button');

    const alertDateElement = screen.getByTestId('alert-date');
    const alertTimeElement = screen.getByTestId('alert-time');
    const alertGuestsElement = screen.getByTestId('alert-guests');
    const alertOccasionElement = screen.getByTestId('alert-occasion');

    // at first render
    expect(buttonElement).toBeInTheDocument();
    expect(alertDateElement.className).toBe('alert_inactive');
    expect(alertTimeElement.className).toBe('alert_inactive');
    expect(alertGuestsElement.className).toBe('alert_inactive');
    expect(alertOccasionElement.className).toBe('alert_inactive');

    // after render and click the submit button with empty inputs
    userEvent.click(buttonElement);

    await waitFor(() => {
      expect(alertDateElement.className).toBe('alert');
    });
    await waitFor(() => {
      expect(alertTimeElement.className).toBe('alert');
    });
    await waitFor(() => {
      expect(alertGuestsElement.className).toBe('alert_inactive');
    });
    await waitFor(() => {
      expect(alertOccasionElement.className).toBe('alert');
    });
  });

  it('Should show warning for select date input', async () => {
    render(
      <BookingForm
        updateTimes={jest.fn()}
        availableTimes={[]}
        navigation={jest.fn()}
      />
    );

    const buttonElement = screen.getByRole('button');
    const dateElement = screen.getByTestId('date');
    const alertDateElement = screen.getByTestId('alert-date');

    // submit with empty date input
    userEvent.click(buttonElement);

    await waitFor(() => {
      expect(dateElement.value).toBe('');
    });

    await waitFor(() => {
      expect(alertDateElement.className).toBe('alert');
    });

    // submit with date selected
    userEvent.type(dateElement, '2023-08-08');

    await waitFor(() => {
      expect(dateElement.value).toBe('2023-08-08');
    });

    await waitFor(() => {
      expect(alertDateElement.className).toBe('alert_inactive');
    });
  });

  it('Should not show warning for select time input, when time is selected', async () => {
    render(
      <BookingForm
        updateTimes={jest.fn()}
        availableTimes={['17:00', '18:00']}
        navigation={jest.fn()}
      />
    );

    const timeElement = screen.getByRole('combobox', { name: /choose time/i });
    const alertTimeElement = screen.getByTestId('alert-time');

    // submit with date selected
    fireEvent.select(timeElement, { target: { value: '17:00' } });

    await waitFor(() => {
      expect(screen.getByText('17:00')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(alertTimeElement.className).toBe('alert_inactive');
    });
  });
});
