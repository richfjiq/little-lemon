import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

export const BookingForm = ({ updateTimes, availableTimes, navigate }) => {
  const { handleSubmit, values, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        date: '',
        time: '',
        guests: 1,
        occasion: '',
      },
      validationSchema: Yup.object({
        date: Yup.string().required('Required'),
        time: Yup.string().required('Required'),
        guests: Yup.number().required('required'),
        occasion: Yup.string().required('Required'),
      }),
      onSubmit: () => {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        };

        fetch(`${process.env.REACT_APP_API_URL}/booking`, requestOptions)
          .then((res) => res.json())
          .then((data) => {
            if (data.msg === 'Booking successful') {
              navigate(
                '/booking_confirm',
                {
                  state: {
                    guests: `${guests} people`,
                    date: `${moment(date).format('MMMM D')} at ${time}`,
                    occasion: values.occasion,
                  },
                },
                { replace: true }
              );
            }
          })
          .catch((error) => console.log(error));
      },
    });

  const { date, time, guests, occasion } = values;

  useEffect(() => {
    if (date) {
      updateTimes(date);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <>
      <h1 className="booking_form_header">Book Now</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form_row">
          <div className="form_input_container">
            <label htmlFor="date">Choose date</label>
            <input
              type="date"
              value={date}
              name="date"
              id="date"
              data-testid="date"
              onChange={handleChange}
              onBlur={handleBlur}
              aria-label="date"
              min={moment().format('YYYY-MM-DD')}
            />
            <div className="form_warning_container">
              <p
                className={
                  touched.date && errors.date ? 'alert' : 'alert_inactive'
                }
                data-testid="alert-date"
              >
                {errors.date}
              </p>
            </div>
          </div>
          <div className="form_input_container">
            <label htmlFor="time">Choose time</label>
            <select
              name="time"
              id="time"
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={date ? false : true}
              value={time}
              aria-label="time"
            >
              <option value="default">Select Time</option>
              {availableTimes?.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <div className="form_warning_container">
              <p
                className={
                  touched.time && errors.time ? 'alert' : 'alert_inactive'
                }
                data-testid="alert-time"
              >
                {errors.time}
              </p>
            </div>
          </div>
        </div>
        <div className="form_row">
          <div className="form_input_container">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="Guests"
              name="guests"
              id="guests"
              onBlur={handleBlur}
              onChange={handleChange}
              value={guests}
              min={1}
              max={8}
              aria-label="guests"
            />
            <div className="form_warning_container">
              <p
                className={
                  touched.guests && errors.guests ? 'alert' : 'alert_inactive'
                }
                data-testid="alert-guests"
              >
                {errors.guests}
              </p>
            </div>
          </div>
          <div className="form_input_container">
            <label htmlFor="occasion">Occasion</label>
            <select
              name="occasion"
              id="occasion"
              onBlur={handleBlur}
              onChange={handleChange}
              value={occasion}
              aria-label="occasion"
            >
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            <div className="form_warning_container">
              <p
                className={
                  touched.occasion && errors.occasion
                    ? 'alert'
                    : 'alert_inactive'
                }
                data-testid="alert-occasion"
              >
                {errors.occasion}
              </p>
            </div>
          </div>
        </div>
        <button aria-label="Submit" className="form_button" type="submit">
          Make your reservation
        </button>
      </form>
    </>
  );
};
