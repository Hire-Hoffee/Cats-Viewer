import { useState } from "react";
import * as SC from "./CatCard.style";
import like from "@/assets/like.svg";
import hoveredLike from "@/assets/hovered-like.svg";

type Props = {
  url: string;
  isLiked?: boolean;
};

function CatCard({ url }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <SC.Card>
      <img src={url} alt="cat" />
      <img
        src={hovered ? hoveredLike : like}
        alt="like"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </SC.Card>
  );
}

export default CatCard;
