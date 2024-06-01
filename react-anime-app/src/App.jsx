import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/NavBar";
import Recommendations from "./pages/Recommendations";
import Topanime from "./pages/Topanime";
import Homeanime from "./pages/Homeanime";
import Manga from "./pages/Manga";
import Topcharacters from "./pages/Topcharacters";
import Topmanga from "./pages/Topmanga";
import Topreviews from "./pages/Topreviews";
import AnimeDetails from "./pages/components/AnimeDetails";
// import AnimeDetails from "./pages/animedetails";
function App() {
  return (
    <>
      {/* <div className="container"> */}
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homeanime />} />
          <Route path="/topanime" element={<Topanime />} />
          <Route path="/topmanga" element={<Topmanga />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/topreviews" element={<Topreviews />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="topcharacters" element={<Topcharacters />} />
          <Route path="/animedetails/:id" element={<AnimeDetails />} />
          {/* <Route path="/animedetails" element={<AnimeDetails />} /> */}
        </Routes>
      </BrowserRouter>
      {/* </div> */}
    </>
  );
}

export default App;
