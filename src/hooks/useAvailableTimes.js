import { useReducer } from 'react';

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
