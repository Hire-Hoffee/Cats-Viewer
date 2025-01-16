import { Routes, Route, useNavigate } from "react-router";
import AllCats from "./pages/AllCats/AllCats";
import LikedCats from "./pages/LikedCats/LikedCats";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/all");
  }, []);

  return (
    <Routes>
      <Route path="/all" element={<AllCats />} />
      <Route path="/liked" element={<LikedCats />} />
    </Routes>
  );
}

export default App;
