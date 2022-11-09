import { BrowserRouter, Routes, Route } from "react-router-dom"
// import './App.css';
import { Box } from "@mui/material"


import { Navbar, Feed, VideoDetail, SearchFeed, ChanelDetail } from "./components"


function App() {
  return (
    <BrowserRouter >
      <Box sx={{ background: "#000" }} >
        <Navbar />
        <Routes  >
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChanelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
