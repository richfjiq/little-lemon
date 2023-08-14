import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const BookingForm = ({ updateTimes, availableTimes }) => {
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

        fetch('http://localhost:8080/api/booking', requestOptions)
          .then((res) => res.json())
          .then((data) => console.log(data));
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
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="form_warning_container">
              {touched.date && errors.date && (
                <p className="time">{errors.date}</p>
              )}
            </div>
          </div>
          <div className="form_input_container">
            <label htmlFor="time">Choose time</label>
            <select
              name="time"
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={date ? false : true}
              value={time}
            >
              <option value="default">Select Time</option>
              {availableTimes?.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <div className="form_warning_container">
              {/* {!date && <p className="time">Select date first.</p>} */}
              {touched.time && errors.time && (
                <p className="time">{errors.time}</p>
              )}
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
              onBlur={handleBlur}
              onChange={handleChange}
              value={guests}
              min={1}
              max={8}
            />
            <div className="form_warning_container">
              {touched.guests && errors.guests && (
                <p className="time">{errors.guests}</p>
              )}
            </div>
          </div>
          <div className="form_input_container">
            <label htmlFor="occasion">Occasion</label>
            <select
              name="occasion"
              onBlur={handleBlur}
              onChange={handleChange}
              value={occasion}
            >
              <option value="">Select a location</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            <div className="form_warning_container">
              {touched.occasion && errors.occasion && (
                <p className="time">{errors.occasion}</p>
              )}
            </div>
          </div>
        </div>
        <button className="form_button" type="submit">
          Make your reservation
        </button>
      </form>
    </>
  );
};
