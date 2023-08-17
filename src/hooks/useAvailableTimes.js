import { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_TIMES':
      return {
        ...state,
        availableTimes: action.payload,
      };
    case 'UPDATE_TIMES':
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};

const useAvailableTimes = () => {
  const initialState = { availableTimes: [], date: '' };
  const [{ availableTimes, date }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    if (date) {
      fetch(`${process.env.REACT_APP_API_URL}/availability`)
        .then((res) => res.json())
        .then((data) => {
          initializeTimes(data.availableTimes);
        })
        .catch((e) => console.log(e));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const initializeTimes = (times) => {
    dispatch({ type: 'INITIALIZE_TIMES', payload: times });
  };

  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  };

  return {
    availableTimes,
    date,
    initializeTimes,
    updateTimes,
  };
};

export default useAvailableTimes;
