import CatCard from "@/components/CatCard/CatCard";
import * as SC from "./LikedCats.style";
import { useAppSelector } from "@/store";

function LikedCats() {
  const cats = useAppSelector((state) => state.data.cats);

  return (
    <SC.Container>
      {cats
        .filter((cat) => cat.isLiked)
        .map((cat) => (
          <CatCard key={cat.id} id={cat.id} url={cat.url} isLiked={cat.isLiked} />
        ))}
    </SC.Container>
  );
}

export default LikedCats;
