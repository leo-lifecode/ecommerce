import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Home from "./pages/home/Home";
import LayoutHome from "./layout/LayoutHome";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import DetailProduct from "./pages/Detailproduct/DetailProduct";
import { ScrollNavigateToTop } from "./helper/NavigateToTop";
const App = () => {
  return (
    <Router>
      <div className="m-auto flex max-w-[1440px] flex-col overflow-hidden">
        <ScrollNavigateToTop />
        <Routes>
          <Route path="/" element={<LayoutHome />}>
            <Route index element={<Home />} />
            <Route path="category" element={<CategoryPage />} />
            <Route path="category/detail/:id" element={<DetailProduct />} />
          </Route>
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
