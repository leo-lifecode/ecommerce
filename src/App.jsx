import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Home from "./pages/home/Home";
import LayoutHome from "./layout/LayoutHome";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import DetailProduct from "./pages/Detailproduct/DetailProduct";
import { ScrollNavigateToTop } from "./helper/NavigateToTop";
import Page404 from "./pages/PageNotFound.jsx/Page404";
import Checkout from "./pages/Checkout/Checkout";

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
            <Route path="checkout" element={<Checkout />} />
          </Route>
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
