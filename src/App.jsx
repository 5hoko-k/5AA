import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='' element= { <Library /> } />
        <Route path='' element= { <About /> } />
      </Routes>
    </>
  );
}
