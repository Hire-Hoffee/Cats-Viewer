import { useState } from "react";
import * as SC from "./CatCard.style";
import like from "../../assets/like.svg";
import hoveredLike from "../../assets/hovered-like.svg";

function CatCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <SC.Card>
      <img
        src="https://cdn.shopify.com/s/files/1/0673/5325/files/LadyDinahs_Cat_Cafe_Alice-Block_2048x.jpg"
        alt="cat"
      />
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
