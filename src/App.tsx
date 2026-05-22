import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recommended from './pages/Recommended';

export default function App() {
  return (
    <BrowserRouter basename="/trackmyage">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommended" element={<Recommended />} />
      </Routes>
    </BrowserRouter>
  );
}
