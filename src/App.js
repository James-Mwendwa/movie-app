import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import TopIMDB from "./pages/TopIMDB";
import Genre from "./pages/Genre";
import Country from "./pages/Country";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/country" element={<Country />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvShows" element={<TvShows />} />
        <Route path="/topIMDB" element={<TopIMDB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
