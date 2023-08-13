export const BookingForm = ({
  onChange,
  date,
  time,
  guests,
  occasion,
  availableTimes,
}) => {
  return (
    <>
      <h1 className="booking_form_header">Book Now</h1>
      <form>
        <div className="form_row">
          <div className="form_input_container">
            <label htmlFor="res-date">Choose date</label>
            <input
              value={date}
              type="date"
              id="res-date"
              name="date"
              onChange={onChange}
            />
          </div>
          <div className="form_input_container">
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              name="time"
              onChange={onChange}
              disabled={date ? false : true}
              value={time}
            >
              <option value="default">Select Time</option>
              <option value="default">Select Time</option>
              <option value="default">Select Time</option>
              {availableTimes?.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <div className="form_warning_container">
              {!date && <p className="time">Select date first.</p>}
            </div>
          </div>
        </div>
        <div className="form_row">
          <div className="form_input_container">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="8"
              id="guests"
              name="guests"
              onChange={onChange}
              value={guests}
            />
          </div>
          <div className="form_input_container">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              onChange={onChange}
              value={occasion}
            >
              <option value="">Select a location</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
        </div>
        <button className="form_button" onClick={(e) => e.preventDefault()}>
          Make your reservation
        </button>
      </form>
    </>
  );
};
