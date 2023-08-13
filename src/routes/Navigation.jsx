import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BookingConfirm, BookingPage, HomePage } from '../components';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking_confirm" element={<BookingConfirm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
