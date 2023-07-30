import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BookingPage, HomePage } from '../components';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
