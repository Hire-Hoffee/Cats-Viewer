import CatCard from "../../components/CatCard/CatCard";
import * as SC from "./AllCats.style";

function AllCats() {
  return (
    <SC.Container>
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
    </SC.Container>
  );
}

export default AllCats;
