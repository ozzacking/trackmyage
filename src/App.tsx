import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recommended from './pages/Recommended';

const BASE = import.meta.env.BASE_URL;

export default function App() {
  return (
    <BrowserRouter basename={BASE}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommended" element={<Recommended />} />
      </Routes>
    </BrowserRouter>
  );
}
