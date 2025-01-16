import { useState } from "react";
import * as SC from "./CatCard.style";
import like from "@/assets/like.svg";
import liked from "@/assets/liked.svg";
import hoveredLike from "@/assets/hovered-like.svg";
import { useAppDispatch } from "@/store";
import { setLike } from "@/store/catsSlice";

type Props = {
  id: string;
  url: string;
  isLiked?: boolean | undefined;
};

function CatCard({ id, url, isLiked }: Props) {
  const [hovered, setHovered] = useState(false);
  const dispatch = useAppDispatch();

  const handleLike = () => {
    dispatch(setLike(id));
  };

  return (
    <SC.Card>
      <img src={url} alt="cat" />
      <img
        onClick={handleLike}
        src={hovered ? hoveredLike : isLiked ? liked : like}
        alt="like"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </SC.Card>
  );
}

export default CatCard;
