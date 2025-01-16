import { useEffect } from "react";
import CatCard from "@/components/CatCard/CatCard";
import * as SC from "./AllCats.style";
import { getAllCats } from "@/api/requests";
import { useAppDispatch, useAppSelector } from "@/store";
import { setCats } from "@/store/catsSlice";

function AllCats() {
  const dispatch = useAppDispatch();
  const cats = useAppSelector((state) => state.data.cats);

  useEffect(() => {
    if (cats.length === 0) {
      getAllCats().then((res) => {
        dispatch(setCats(res.data));
      });
    }
  }, []);

  return (
    <SC.Container>
      {cats.map((cat) => (
        <CatCard key={cat.id} id={cat.id} url={cat.url} isLiked={cat.isLiked} />
      ))}
    </SC.Container>
  );
}

export default AllCats;
