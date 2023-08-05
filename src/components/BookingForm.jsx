const availableTimes = [
  'Select date',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
];

export const BookingForm = ({ onChange, date, time, guests, occasion }) => {
  return (
    <form>
      <div className="form_row">
        <div className="form_input_container">
          <label htmlFor="res-date">Chose date</label>
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
          <select id="res-time" name="time" onChange={onChange}>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
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
          />
        </div>
        <div className="form_input_container">
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" name="occasion" onChange={onChange}>
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
  );
};
