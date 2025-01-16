import { useEffect } from "react";
import CatCard from "@/components/CatCard/CatCard";
import * as SC from "./AllCats.style";
import { getAllCats } from "@/api/requests";
import { useAppDispatch, useAppSelector } from "@/store";
import { setCats, setLoading } from "@/store/catsSlice";
import { Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

function AllCats() {
  const dispatch = useAppDispatch();
  const cats = useAppSelector((state) => state.data.cats);
  const isLoading = useAppSelector((state) => state.data.isLoading);
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (cats.length === 0) {
      dispatch(setLoading(true));
      getAllCats().then((res) => {
        dispatch(setCats(res.data));
        dispatch(setLoading(false));
      });
    }
    if (inView) {
      getAllCats().then((res) => {
        dispatch(setCats(res.data));
      });
    }
  }, [inView]);

  return (
    <>
      {!isLoading ? (
        <>
          <SC.Container>
            {cats.map((cat) => (
              <CatCard key={cat.id} id={cat.id} url={cat.url} isLiked={cat.isLiked} />
            ))}
          </SC.Container>
          <Typography ref={ref} textAlign={"center"} marginBottom={"24px"}>
            ... загружаем еще котиков ...
          </Typography>
        </>
      ) : (
        <Typography textAlign={"center"} variant="h6" marginTop={"48px"}>
          Загрузка котиков...
        </Typography>
      )}
    </>
  );
}

export default AllCats;
