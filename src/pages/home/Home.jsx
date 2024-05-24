import Homepage from "./components/Homepage";
import CategoryShop from "./components/CategoryShop";
import BrowseByDress from "./components/BrowseByDress";
import { useSelector } from "react-redux";
const Home = () => {
  const datascreen = useSelector((state) => state.screen.screen);

  return (
    <div className={`${datascreen ? "opacity-30" : null}`}>
      <Homepage />
      <CategoryShop />
      <BrowseByDress />
    </div>
  );
};

export default Home;
