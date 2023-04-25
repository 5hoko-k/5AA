import { Routes, Route } from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Library from "./pages/Library";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/library' element= { <Library /> } />
        <Route path='/about' element= { <About /> } />
      </Routes>
    </>
  );
}
