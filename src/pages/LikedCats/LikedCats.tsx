import CatCard from "@/components/CatCard/CatCard";
import * as SC from "./LikedCats.style";
import { useAppSelector } from "@/store";
import { Typography } from "@mui/material";

function LikedCats() {
  const cats = useAppSelector((state) => state.data.cats);
  const filteredCats = cats.filter((cat) => cat.isLiked);

  return (
    <>
      {filteredCats.length ? (
        <SC.Container>
          {filteredCats
            .filter((cat) => cat.isLiked)
            .map((cat) => (
              <CatCard key={cat.id} id={cat.id} url={cat.url} isLiked={cat.isLiked} />
            ))}
        </SC.Container>
      ) : (
        <Typography textAlign={"center"} variant="h6" marginTop={"48px"}>
          У вас нет любимых котиков :(
        </Typography>
      )}
    </>
  );
}

export default LikedCats;
