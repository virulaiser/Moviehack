import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
