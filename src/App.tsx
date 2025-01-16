import { Routes, Route, useNavigate } from "react-router";
import AllCats from "./pages/AllCats/AllCats";
import LikedCats from "./pages/LikedCats/LikedCats";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/all");
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/all" element={<AllCats />} />
        <Route path="/liked" element={<LikedCats />} />
      </Routes>
    </>
  );
}

export default App;
