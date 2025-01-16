import { useState, useEffect } from "react";
import CatCard from "../../components/CatCard/CatCard";
import * as SC from "./AllCats.style";
import { getAllCats } from "../../api/requests";
import type { Cat } from "../../types/cats";

function AllCats() {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    getAllCats().then((res) => setCats(res.data));
  }, []);

  return (
    <SC.Container>
      {cats.map((cat) => (
        <CatCard key={cat.id} url={cat.url} />
      ))}
    </SC.Container>
  );
}

export default AllCats;
