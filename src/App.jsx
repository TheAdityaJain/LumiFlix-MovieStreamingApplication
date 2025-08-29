import "./App.css";
import { CreditsPage } from "./components/CreditsPage";
import { HomePage } from "./components/HomePage";
import { SearchResult } from "./components/SearchResult";
import { Routes, Route } from "react-router-dom";
import { VideoPlayer } from "./components/VideoPlayer";

function App() {
  const API = "198ad226705598f8a5b2147905f30fd3";
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-result" element={<SearchResult API={API} />} />
        <Route path="/about" element={<CreditsPage />} />
        <Route path="/video-player" element={<VideoPlayer />} />
      </Routes>
    </>
  );
}

export default App;
