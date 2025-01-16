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
  const [isLikeHovered, setIsLikeHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const dispatch = useAppDispatch();

  const handleLike = () => {
    dispatch(setLike(id));
  };

  return (
    <SC.Card
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <img src={url} alt="cat" />
      {(isCardHovered || isLiked) && (
        <img
          className="like"
          onClick={handleLike}
          src={isLikeHovered ? hoveredLike : isLiked ? liked : like}
          alt="like"
          onMouseEnter={() => setIsLikeHovered(true)}
          onMouseLeave={() => setIsLikeHovered(false)}
        />
      )}
    </SC.Card>
  );
}

export default CatCard;
